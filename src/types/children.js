import PropTypes from 'prop-types';

const childrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export default childrenType;
