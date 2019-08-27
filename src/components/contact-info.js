import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const ContactInfo = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
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

  const { address } = data.site.siteMetadata;
  const { phone } = data.site.siteMetadata;

  return (
    <div className="container">
      <p>
        {address.street}
      </p>
      <p>
        {`${address.city} ${address.state} ${address.zipCode}`}
      </p>
      <p>
        {'Office: '}
        <a href={`tel:${phone.office}`}>{phone.office}</a>
      </p>
      <p>
        {'Fax: '}
        <a href={`tel:${phone.fax}`}>{phone.fax}</a>
      </p>
    </div>
  );
};

ContactInfo.propTypes = {

};

export default ContactInfo;
