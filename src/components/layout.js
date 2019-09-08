import React from 'react';
import {
  Footer,
  Navbar,
} from '.';
import '../styles/main.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import childrenType from '../types/children';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: childrenType.isRequired,
};

export default Layout;
