/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import routes from '../utils/routes';
import routeType from '../types/route';
import {
  cmsIdentity,
  reCAPTCHA,
} from '../utils/scripts';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `);

  useEffect(() => {
    require('smooth-scroll')('a[href*="#"]', {
      speed: 600,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
    });
  }, []);

  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} | ${data.site.siteMetadata.title} | Everett Retina Care Provider`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords.join(',')} />
      {cmsIdentity}
      {title === routes.contact.name && reCAPTCHA}
    </Helmet>
  );
};

Head.propTypes = {
  title: routeType.isRequired,
};

export default Head;
