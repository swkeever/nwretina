import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, color, id }) => (
  <section className={`hero is-${color} is-fullheight is-bold`} id={id}>
    <div className="hero-body">
      <div className="container">
        {children}
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'warning',
    'success',
    'danger',
    'dark',
    'light',
  ]).isRequired,
  id: PropTypes.string.isRequired,
};

export default Hero;
