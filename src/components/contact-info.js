import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import getAddress from '../functions/get-address';
import colorType from '../types/color';
import { externalLinkProps, googleMaps } from '../utils/links';

const ContactInfo = ({ color }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          phone {
            office
            fax
          }
          officeHours {
            weekStart
            weekEnd
            hourStart
            hourEnd
          }
        }
      }
    }
  `);

  const { phone, officeHours } = data.site.siteMetadata;
  const linkColor = `has-text-${color}`;

  return (
    <div className="container">
      <p className={linkColor}>
        {`${officeHours.hourStart} - ${officeHours.hourEnd}; 
        ${officeHours.weekStart} - ${officeHours.weekEnd}`}
      </p>
      <p>
        <a className={linkColor} href={googleMaps.link} {...externalLinkProps}>
          {getAddress()}
        </a>
      </p>
      <p>
        <a className={linkColor} href={`tel:${phone.office}`}>
          {`${phone.office} (office)`}
        </a>
      </p>
      <p>
        <a className={linkColor} href={`tel:${phone.fax}`}>
          {`${phone.fax} (fax)`}
        </a>
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
