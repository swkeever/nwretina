import { useStaticQuery, graphql } from 'gatsby';

const getAddress = () => {
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
        }
      }
    }
  `);

  const { address } = data.site.siteMetadata;

  return `${address.street.line1} ${address.street.line2},
    ${address.city}, ${address.state} ${address.zipCode}`;
};

export default getAddress;
