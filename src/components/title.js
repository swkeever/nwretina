import React from 'react';
import childrenType from '../types/children';

const Title = ({ children }) => (
  <h1 className="title is-4">
    {children}
  </h1>
);

Title.propTypes = {
  children: childrenType.isRequired,
};

export default Title;
