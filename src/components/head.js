/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import 'aos/dist/aos.css';
import routes from '../utils/routes';
import routeType from '../types/route';
import {
  cmsIdentity,
  aos,
  reCAPTCHA,
} from '../utils/scripts';


const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titleFull
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
    require('aos').init({
      duration: 700,
      delay: 150,
      ease: 'ease-in-out',
    });
  }, []);

  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.titleFull}`}</title>
      <link
        defer
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
      />
      {cmsIdentity}
      {title === routes.home.name && aos}
      {title === routes.contact.name && reCAPTCHA}
    </Helmet>
  );
};

Head.propTypes = {
  title: routeType.isRequired,
};

export default Head;
