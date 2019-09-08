import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import getFluidImage from '../functions/get-fluid-image';

const Image = ({ src, alt }) => {
  const fluid = getFluidImage(src);

  return (
    <figure className="image">
      <Img
        fluid={fluid}
        alt={alt}
      />
    </figure>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
