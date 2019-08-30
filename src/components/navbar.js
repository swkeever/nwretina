import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Navbar = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          nav {
            internal {
              link {
                href
              }
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
      const { link } = navLink;
      const linkStyle = `navbar-item is-tab has-text-light ${location === link.href && 'is-active'}`;
      return link.href.includes('https')
        ? (
          <a className={linkStyle} href={link.href} target="_blank" rel="noopener noreferrer">
            {navLink.name}
          </a>
        )
        : (
          <Link key={link.name} activeClassName="active" className={`${linkStyle}`} exact to={link.href}>
            {navLink.name}
          </Link>
        );
    });

  return (
    <nav className="navbar is-transparent is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
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
