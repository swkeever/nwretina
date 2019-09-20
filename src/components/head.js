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
  fontAwesome,
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
      {cmsIdentity}
      {title === routes.home.name && aos}
      {title === routes.contact.name && reCAPTCHA}
      {fontAwesome}
    </Helmet>
  );
};

Head.propTypes = {
  title: routeType.isRequired,
};

export default Head;
