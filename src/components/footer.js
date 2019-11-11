import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ContactInfo from './contact-info';
import links, { externalLinkProps } from '../utils/links';
import navLinks from '../utils/routes';
import childrenType from '../types/children';
import Icon from './icon';

const FooterHeader = ({ children }) => (
  <h2 className="is-size-6">
    {children}
  </h2>
);

FooterHeader.propTypes = {
  children: childrenType.isRequired,
};

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
    <footer
      role="contentinfo"
      className="section has-background-dark has-text-light is-size-7"
    >
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="columns">

              <div className="column">
                <FooterHeader className={headerSize}>Navigate</FooterHeader>
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
                <FooterHeader className={headerSize}>Related</FooterHeader>
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
              <div className="column">
                <FooterHeader className={headerSize}>Contact</FooterHeader>
                <ContactInfo color={color} />
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
                          aria-label={link.name}
                          className={linkColor}
                          href={link.href}
                          {...externalLinkProps}
                        >
                          <Icon name={link.name} />
                        </a>
                      </span>
                    </li>
                  ))
}

              </ul>
            </nav>
          </div>
        </div>
        <ul className="level has-text-light is-marginless has-text-grey-light">
          <li key="copyright" className="level-item">
            {`Copyright ©️ ${new Date().getFullYear()} ${titleFull}`}
          </li>
          <li key="admin-portal" className="level-item">
            <a
              className={linkColor}
              href="/admin/"
              {...externalLinkProps}
            >
              Admin Portal
            </a>
          </li>
          <li key="sitemap" className="level-item">
            <a className={linkColor} href="/sitemap.xml">Sitemap</a>
          </li>
          <li key="credits" className="level-item">
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
