import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ContactInfo from './contact-info';
import getGoogleMapsLink from '../functions/get-google-maps-link';
import getExternalLinkProps from '../functions/get-external-link-props';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titleFull
          nav {
            internal {
              link
              name
            }
            external {
              link
              name
            }
          }
          developer {
            name
            link
          }
          socialMedia {
            facebook
          }
          email
        }
      }
    }
  `);

  const {
    titleFull,
    nav,
    developer,
    socialMedia,
  } = data.site.siteMetadata;

  const color = 'info';
  const linkColor = `has-text-${color}`;
  const headerSize = 'is-size-6';
  const externalLinkProps = getExternalLinkProps();

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
                  nav.internal.map((navLink) => (
                    <li>
                      <Link
                        className={linkColor}
                        to={navLink.link}
                      >
                        {navLink.name}

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
                  nav.external.map((navLink) => (
                    <li>
                      <a
                        className={linkColor}
                        href={navLink.link}
                        {...externalLinkProps}
                      >
                        {navLink.name}
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
                <li className="level-item">
                  <span className="icon is-size-2">
                    <a className={linkColor} href={socialMedia.facebook} {...externalLinkProps}>
                      <i className="fab fa-facebook" />
                    </a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ul className="level has-text-grey is-marginless">
          <li className="level-item">
            {`Copyright ©️ ${new Date().getFullYear()} ${titleFull}`}
          </li>
          <li className="level-item">
            <a className={linkColor} href="/admin/">Admin Portal</a>
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
