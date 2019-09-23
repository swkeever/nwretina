import { useStaticQuery, graphql } from 'gatsby';

const getContent = (slugPrefix) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              order
              title
              image
              page
              imageDescription
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges
    .filter((e) => e.node.fields.slug.startsWith(slugPrefix))
    .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
    .map((e) => ({
      id: e.node.id.toString(),
      html: e.node.html,
      image: {
        src: e.node.frontmatter.image,
        alt: e.node.frontmatter.imageDescription,
      },
      title: e.node.frontmatter.title,
    }));
};

export default getContent;
