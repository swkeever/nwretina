import React from 'react';
import PropTypes from 'prop-types';
import colorType from '../types/color';

const Hero = ({
  children, color, id, bold,
}) => (
  <section className={`hero is-${color} is-fullheight ${bold && 'is-bold'}`} id={id}>
    <div className="hero-body">
      <div className="container">
        {children}
      </div>
    </div>
  </section>
);

Hero.defaultProps = {
  color: 'light',
  bold: false,
};

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  color: colorType,
  id: PropTypes.string.isRequired,
  bold: PropTypes.bool,
};

export default Hero;
