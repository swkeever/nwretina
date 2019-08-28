import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Navbar = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navLinks {
            link {
              href
            }
            name
          }
        }
      }
    }
  `);


  const [open, setOpen] = useState(false);

  const links = data.site.siteMetadata.navLinks.map((navLink) => {
    const { link } = navLink;
    const linkStyle = `navbar-item is-tab ${location === link.href && 'is-active'}`;
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
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <button
          type="button"
          className="navbar-burger burger button is-white"
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
      <div className={`navbar-menu ${open && 'is-active'}`}>
        {links}
      </div>
    </nav>
  );
};

export default Navbar;
