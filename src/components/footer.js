import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ContactInfo from './contact-info';
import links, { externalLinkProps } from '../utils/links';
import navLinks from '../utils/routes';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titleFull
          developer {
            name
            link
          }
          socialMedia {
            name
            href
          }
          email
        }
      }
    }
  `);

  const {
    titleFull,
    developer,
    socialMedia,
  } = data.site.siteMetadata;

  const color = 'info';
  const linkColor = `has-text-${color}`;
  const headerSize = 'is-size-6';

  return (
    <footer className="section has-background-dark has-text-light is-size-7">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="columns">
              <div className="column">
                <h5 className={headerSize}>Navigate</h5>
                <ul>
                  {
                  Object
                    .values(navLinks)
                    .map((route) => (
                      <li key={route.name}>
                        <Link
                          className={linkColor}
                          to={route.href}
                        >
                          {route.name}
                        </Link>
                      </li>
                    ))
                }
                </ul>
              </div>
              <div className="column">
                <h5 className={headerSize}>Contact</h5>
                <ContactInfo color={color} />
              </div>
              <div className="column">
                <h5 className={headerSize}>Related</h5>
                <ul>
                  {
                  links.map((link) => (
                    <li key={link.name}>
                      <a
                        className={linkColor}
                        href={link.href}
                        {...externalLinkProps}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))
                }
                </ul>
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            <nav className="m-t-md">
              <ul className="level">
                {
                  socialMedia.map((link) => (
                    <li key={link.name} className="level-item">
                      <span className="icon is-size-2">
                        <a
                          data-testid={link.name}
                          className={linkColor}
                          href={link.href}
                          {...externalLinkProps}
                        >
                          <i className="fab fa-facebook" />
                        </a>
                      </span>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
        <ul className="level has-text-grey is-marginless">
          <li className="level-item">
            {`Copyright ©️ ${new Date().getFullYear()} ${titleFull}`}
          </li>
          <li className="level-item">
            <a
              className={linkColor}
              href="/admin/"
              {...externalLinkProps}
            >
              Admin Portal
            </a>
          </li>
          <li className="level-item">
            <Link className={linkColor} to="/sitemap.xml">Sitemap</Link>
          </li>
          <li className="level-item">
            {'Website made with '}
            <span role="img" className="m-l-xxs m-r-xxs" aria-label="Love">❤️</span>
            {' by '}
            <a className={`${linkColor} m-l-xxs`} href={developer.link} {...externalLinkProps}>{developer.name}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
