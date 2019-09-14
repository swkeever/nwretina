import React from 'react';
import PropTypes from 'prop-types';
import childrenType from '../types/children';


const Heading = ({ children, tag }) => {
  const TagName = tag;

  return (
    <TagName className="title is-4 p-t-lg">
      {children}
    </TagName>
  );
};

Heading.defaultProps = {
  tag: 'h1',
};

Heading.propTypes = {
  children: childrenType.isRequired,
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),
};

export default Heading;
