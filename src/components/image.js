import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ path, alt, style }) => {
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

  const source = data.allFile.edges.find((edge) => (
    edge.node.relativePath === path
  ));

  if (!source) {
    throw new Error(`${path} does not exist`);
  }

  return (
    <Img
      fluid={source.node.childImageSharp.fluid}
      alt={alt}
      style={style}
    />
  );
};

Image.defaultProps = {
  style: null,
};

Image.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Image;
