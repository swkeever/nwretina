import React from 'react';
import childrenType from '../types/children';

const Header = ({ children }) => (
  <h2 className="title is-4">
    {children}
  </h2>
);

Header.propTypes = {
  children: childrenType.isRequired,
};

export default Header;
