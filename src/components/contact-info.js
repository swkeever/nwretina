import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import getGoogleMapsLink from '../functions/get-google-maps-link';

const ContactInfo = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
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
          externalLinkProps {
            target
            rel
          }
        }
      }
    }
  `);

  const {
    address,
    phone,
    externalLinkProps,
  } = data.site.siteMetadata;

  const linkColor = 'has-text-info';

  return (
    <div className="container">
      <p>
        <a className={linkColor} href={getGoogleMapsLink()} {...externalLinkProps}>
          {`${address.street.line1} ${address.street.line2}, ${address.city} ${address.state} ${address.zipCode}`}
        </a>
      </p>
      <p>
        {'Office: '}
        <a className={linkColor} href={`tel:${phone.office}`}>{phone.office}</a>
      </p>
      <p>
        {'Fax: '}
        <a className={linkColor} href={`tel:${phone.fax}`}>{phone.fax}</a>
      </p>
    </div>
  );
};

ContactInfo.propTypes = {

};

export default ContactInfo;
