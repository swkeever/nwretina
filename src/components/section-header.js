import React from 'react';
import PropTypes from 'prop-types';
import childrenType from '../types/children';

const SectionHeader = ({ children }) => (
  <h2 className="title is-4">
    {children}
  </h2>
);

SectionHeader.propTypes = {
  children: childrenType.isRequired,
};

export default SectionHeader;
