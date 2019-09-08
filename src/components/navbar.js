import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Navbar = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          nav {
            internal {
              link
              name
            }
          }
        }
      }
    }
  `);


  const [open, setOpen] = useState(false);

  const links = data
    .site
    .siteMetadata
    .nav
    .internal
    .map((navLink) => {
      const { link, name } = navLink;
      const linkStyle = `navbar-item is-tab has-text-light ${location === link && 'is-active'}`;
      return link.includes('https')
        ? (
          <a className={linkStyle} href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        )
        : (
          <Link key={link} activeClassName="active" className={`${linkStyle}`} exact to={link}>
            {name}
          </Link>
        );
    });

  return (
    <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          className="navbar-item"
          to="/"
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
