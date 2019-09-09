import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import getFluidImage from '../utils/get-fluid-image';
import childrenType from '../types/children';

const style = {
  width: '100%',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
};

const BackgroundSection = ({ src, children }) => {
  const fluid = getFluidImage(src);

  return (
    <BackgroundImage
      fluid={fluid}
      style={style}
      className="hero is-primary"
    >
      {children}
    </BackgroundImage>
  );
};

BackgroundSection.propTypes = {
  src: PropTypes.string.isRequired,
  children: childrenType.isRequired,
};

export default BackgroundSection;
