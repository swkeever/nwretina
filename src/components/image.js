import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import getFluidImage from '../functions/get-fluid-image';

const Image = ({ src, alt }) => {
  const fluid = getFluidImage(src);

  return (
    <figure className="image">
      <Img
        fluid={fluid}
        alt={alt}
        style={{ margin: '1rem', maxHeight: 'calc(80vh - 4rem)' }}
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
