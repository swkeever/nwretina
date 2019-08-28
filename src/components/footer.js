import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ContactInfo from './contact-info';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titleFull
          address {
            street
            city
            state
            zipCode
          }
          phone {
            office
            fax
          }
        }
      }
    }
  `);

  const { address, phone } = data.site.siteMetadata;

  return (
    <footer className="footer has-background-dark has-text-light">
      <div className="columns">
        <div className="column">
          <h3 className="has-text-light is-size-4">Contact</h3>
          <ContactInfo />
        </div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      
      <div className="container p-t-md has-text-grey">
        <p>
          {`${data.site.siteMetadata.titleFull}, ©️ ${new Date().getFullYear()}`}
        </p>
        <p>
          Made with
          {' '}
          <span role="img" aria-label="heart">❤️</span>
          {' '}
          by
          {' '}
          <a
            className="has-text-link"
            href="https://swkeever.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sean Keever
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
