import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import routes from '../utils/routes';
import toAnchorLink from '../utils/to-anchor-link';
import { SITE_HEADER } from '../utils/constants';

const Navbar = ({ home }) => {
  const [open, setOpen] = useState(false);

  const links = Object
    .values(routes)
    .map((route) => {
      const { href, name } = route;
      const linkStyle = 'navbar-item is-tab has-text-light';
      return (
        <Link
          key={name}
          activeClassName="is-active"
          className={linkStyle}
          to={href}
        >
          {name}
        </Link>
      );
    });

  const showBrand = () => {
    const icon = (
      <span className="icon is-medium">
        <i className="fas fa-tree" />
      </span>
    );
    const className = 'navbar-item has-text-light';
    return home
      ? (
        <a
          className={className}
          href={toAnchorLink(SITE_HEADER)}
        >
          {icon}
        </a>
      )
      : (
        <Link
          className={className}
          to={routes.home.href}
        >
          {icon}
        </Link>
      );
  };

  return (
    <nav
      className="navbar is-fixed-top is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {showBrand()}

        <button
          data-testid="burger"
          type="button"
          className="navbar-burger burger button is-primary"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div
        id="navbar-menu"
        data-testid={open ? 'menu-active' : 'menu-inactive'}
        className={`navbar-menu has-background-primary ${open && 'is-active'}`}
      >
        {links}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  home: PropTypes.bool.isRequired,
};

export default Navbar;
