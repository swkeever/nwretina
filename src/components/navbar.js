import React, { useState } from 'react';
import { Link } from 'gatsby';
import navLinks from '../utils/routes';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = Object
    .values(navLinks)
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

  return (
    <nav
      className="navbar is-fixed-top is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          className="navbar-item has-text-light"
          to={navLinks.home.href}
        >
          <span className="icon is-medium">
            <i className="fas fa-tree" />
          </span>
        </Link>
        <button
          type="button"
          className="navbar-burger burger button is-primary"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className={`navbar-menu has-background-primary ${open && 'is-active'}`}>
        {links}
      </div>
    </nav>
  );
};

export default Navbar;
