import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ src, alt, style }) => {
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

  const source = data
    .allFile
    .edges
    .find((edge) => `/${edge.node.relativePath}` === src);

  if (!source) {
    throw new Error(`${src} does not exist`);
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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default Image;
