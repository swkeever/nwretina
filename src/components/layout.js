import React from 'react';
import PropTypes from 'prop-types';
import {
  Footer,
  Navbar,
} from '.';
import '../styles/main.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import childrenType from '../types/children';

const Layout = ({ children, home }) => (
  <div>
    <Navbar home={home} />
    {children}
    <Footer />
  </div>
);

Layout.defaultProps = {
  home: false,
};

Layout.propTypes = {
  children: childrenType.isRequired,
  home: PropTypes.bool,
};

export default Layout;
