import PropTypes from 'prop-types';
import routes from '../utils/routes';

const routeType = PropTypes.oneOf(
  Object
    .values(routes)
    .map((route) => route.name),
);

export default routeType;
