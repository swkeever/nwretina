import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ContactInfo from './contact-info';
import getGoogleMapsLink from '../functions/get-google-maps-link';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titleFull
          address {
            street {
              line1
              line2
            }
            city
            state
            zipCode
          }
          phone {
            office
            fax
          }
          nav {
            internal {
              link {
                href
              }
              name
            }
            external {
              link {
                href
              }
              name
            }
          }
          developer {
            name
            link
          }
          externalLinkProps {
            target
            rel
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
    address,
    phone,
    nav,
    externalLinkProps,
    email,
    developer,
    socialMedia,
  } = data.site.siteMetadata;

  const linkColor = 'has-text-info';
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
                  nav.internal.map((navLink) => (
                    <li>
                      <Link className={linkColor} to={navLink.link.href}>{navLink.name}</Link>
                    </li>
                  ))
                }
                </ul>
              </div>
              <div className="column">
                <h5 className={headerSize}>Contact</h5>
                <ul>
                  <li>
                    <a href={getGoogleMapsLink()} className={linkColor} {...externalLinkProps}>
                      {
                      `
                      ${address.street.line1},
                      ${address.street.line2}
                      ${address.city}, ${address.state}
                      ${address.zipCode}
                      `
                    }
                    </a>
                  </li>
                  <li>
                    <a className={linkColor} href={`tel:${phone.office}`}>{`${phone.office} (office)`}</a>
                  </li>
                  <li>
                    <a className={linkColor} href={`tel:${phone.fax}`}>{`${phone.fax} (fax)`}</a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h5 className={headerSize}>Related</h5>
                <ul>
                  {
                  nav.external.map((navLink) => (
                    <li>
                      <a className={linkColor} href={navLink.link.href} {...externalLinkProps}>
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
          <li className="level-item has-text-centered">
            {`Copyright ©️ ${new Date().getFullYear()} ${titleFull}`}
          </li>
          <li className="level-item has-text-centered">
            <Link className={linkColor} to="/sitemap.xml">Sitemap</Link>
          </li>
          <li className="level-item has-text-centered">
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
