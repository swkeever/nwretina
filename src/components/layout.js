import React from 'react';
import PropTypes from 'prop-types';
import {
  Footer,
  Navbar,
} from '.';
import '../styles/main.scss';
import childrenType from '../types/children';

const Layout = ({ children, home }) => (
  <>
    <Navbar home={home} />
    <main role="main">
      {children}
    </main>
    <Footer />
  </>
);

Layout.defaultProps = {
  home: false,
};

Layout.propTypes = {
  children: childrenType.isRequired,
  home: PropTypes.bool,
};

export default Layout;
