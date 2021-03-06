import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import getFluidImage from '../utils/get-fluid-image';

const Image = ({ src, alt }) => {
  const fluid = getFluidImage(src);

  return (
    <figure>
      <Img
        className="nw-image"
        data-testid={alt}
        fluid={fluid}
        alt={alt}
        imgStyle={{ objectFit: 'contain' }}
      />
    </figure>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
