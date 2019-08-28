import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import Navbar from './navbar';
import '../styles/main.scss';

const Layout = ({ children, location }) => (
  <div>
    <Navbar location={location} />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  location: PropTypes.string.isRequired,
};

export default Layout;
