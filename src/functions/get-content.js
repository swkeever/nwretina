import { useStaticQuery, graphql } from 'gatsby';
import toKebabCase from './to-kebab-case';

const getContent = (slug) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              header
              image
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);


  const edge = data
    .allMarkdownRemark
    .edges
    .find((e) => e.node.fields.slug === slug);

  return {
    id: edge.node.id.toString(),
    html: edge.node.html,
    image: {
      src: edge.node.frontmatter.image,
      alt: edge.node.frontmatter.imageDescription,
    },
    header: edge.node.frontmatter.header,
  };
};

export default getContent;
