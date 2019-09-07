import { useStaticQuery, graphql } from 'gatsby';

const getGoogleMapsLink = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          nav {
            external {
              link
              name
            }
          }
        }
      }
    }
  `);

  const navLink = data
    .site
    .siteMetadata
    .nav
    .external
    .find((item) => item.name === 'Google Maps');
  return navLink.link;
};

export default getGoogleMapsLink;
