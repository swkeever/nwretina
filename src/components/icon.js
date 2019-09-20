import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => (
  <i className={`icon-${name.toLowerCase()}`} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
