import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ content }) => (
  <h2 className="title is-4">
    {content}
  </h2>
);

Header.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Header;
