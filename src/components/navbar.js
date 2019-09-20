import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import routes from '../utils/routes';
import toAnchorLink from '../utils/to-anchor-link';
import { SITE_HEADER } from '../utils/constants';

const Navbar = ({ home }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [open, setOpen] = useState(false);

  const links = Object
    .values(routes)
    .map((route) => {
      const { href, name } = route;
      const linkStyle = 'navbar-item is-tab has-text-light';
      return (
        <li key={name}>
          <Link
            className={linkStyle}
            activeClassName="is-active"
            to={href}
          >
            {name}
          </Link>
        </li>

      );
    });

  const showBrand = () => {
    const brand = (
      <div>

        <span>
          {data.site.siteMetadata.title}
        </span>
      </div>

    );

    const className = 'navbar-item has-text-light';
    return home
      ? (
        <a
          className={className}
          href={toAnchorLink(SITE_HEADER)}
        >
          {brand}
        </a>
      )
      : (
        <Link
          className={className}
          to={routes.home.href}
        >
          {brand}
        </Link>
      );
  };

  return (
    <header
      className="navbar is-fixed-top is-primary"
      role="banner"
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
      <nav
        role="navigation"
        id="navbar-menu"
        data-testid={open ? 'menu-active' : 'menu-inactive'}
        className={`navbar-menu has-background-primary ${open && 'is-active'}`}
      >
        <ul className="navbar-end">
          {links}
        </ul>
      </nav>
    </header>
  );
};

Navbar.defaultProps = {
  home: false,
};

Navbar.propTypes = {
  home: PropTypes.bool,
};

export default Navbar;
