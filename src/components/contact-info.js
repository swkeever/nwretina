import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import getGoogleMapsLink from '../functions/get-google-maps-link';
import getAddress from '../functions/get-address';
import colorType from '../types/color';
import getExternalLinkProps from '../functions/get-external-link-props';

const ContactInfo = ({ color }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          phone {
            office
            fax
          }
        }
      }
    }
  `);

  const {
    address,
    phone,
  } = data.site.siteMetadata;

  const linkColor = `has-text-${color}`;
  const externalLinkProps = getExternalLinkProps();

  return (
    <div className="container">
      <p>
        <a className={linkColor} href={getGoogleMapsLink()} {...externalLinkProps}>
          {getAddress()}
        </a>
      </p>
      <p>
        <a className={linkColor} href={`tel:${phone.office}`}>{phone.office} (office)</a>
      </p>
      <p>
        <a className={linkColor} href={`tel:${phone.fax}`}>{phone.fax} (fax)</a>
      </p>
    </div>
  );
};

ContactInfo.defaultProps = {
  color: 'grey-darker',
};

ContactInfo.propTypes = {
  color: colorType,
};

export default ContactInfo;
