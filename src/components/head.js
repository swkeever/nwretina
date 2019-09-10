/* eslint-disable global-require */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import 'aos/dist/aos.css';

const Head = ({ title, reCAPTCHA }) => {
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
      <html lang="en" />
      <title>{`${title} | ${data.site.siteMetadata.titleFull}`}</title>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <script src="https://unpkg.com/aos@next/dist/aos.js" />
      {reCAPTCHA ? <script src="https://www.google.com/recaptcha/api.js" async defer /> : null}
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
    </Helmet>
  );
};

Head.defaultProps = {
  reCAPTCHA: false,
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  reCAPTCHA: PropTypes.bool,
};

export default Head;
