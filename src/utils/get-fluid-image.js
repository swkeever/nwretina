import { useStaticQuery, graphql } from 'gatsby';

const getFluidImage = (src) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            relativePath
          }
        }
      }
    }
  `);

  const edge = data
    .allFile
    .edges
    .find((e) => `/${e.node.relativePath}` === src);

  if (!edge) {
    return undefined;
  }

  return edge.node.childImageSharp.fluid;
};

export default getFluidImage;
