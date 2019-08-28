import React from 'react';
import PropTypes from 'prop-types';

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
  color: PropTypes.oneOf([
    'primary',
    'info',
    'warning',
    'success',
    'danger',
    'dark',
    'light',
    'white',
  ]),
  id: PropTypes.string.isRequired,
  bold: PropTypes.bool,
};

export default Hero;
