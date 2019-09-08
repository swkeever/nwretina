import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import colorType from '../types/color';
import getFluidImage from '../functions/get-fluid-image';
import childrenType from '../types/children';
import BackgroundSection from './background-section';

const Hero = ({
  children, color, id, image,
}) => {
  const hero = (
    <section
      className={
      `
      hero 
      is-${color} 
      is-fullheight 
      `
    }
      id={id}
      style={image && { opacity: 0.9 }}
    >
      <div className="hero-body">
        <div className="container">
          {children}
        </div>
      </div>
    </section>
  );

  if (image) {
    return (
      <BackgroundSection src={image}>
        {hero}
      </BackgroundSection>
    );
  }

  return hero;
};

Hero.defaultProps = {
  color: 'light',
  image: null,
};

Hero.propTypes = {
  children: childrenType.isRequired,
  color: colorType,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Hero;
