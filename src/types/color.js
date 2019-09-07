import PropTypes from 'prop-types';

const colorType = PropTypes.oneOf([
  'primary',
  'info',
  'warning',
  'success',
  'danger',
  'dark',
  'light',
  'white',
  'black',
  'link',
  'black-bis',
  'black-ter',
  'grey-darker',
  'grey-dark',
  'grey-light',
  'grey-lighter',
  'white-ter',
  'white-bis',
]);

export default colorType;
