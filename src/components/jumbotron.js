import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Hero } from '.';
import { nextSectionText, SITE_HEADER } from '../utils/constants';

const Jumbotron = ({ anchor }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleFull
        }
      }
    }
  `);

  const buttonStyles = `
    button
    is-light
    is-outlined
  `;

  return (
    <Hero
      color="primary"
      image="/uploads/pnw.jpg"
      id={SITE_HEADER}
    >
      <h1
        className={`
        title 
        is-1 
        is-size-3-mobile
        has-text-light`}
      >
        {data.site.siteMetadata.title}
      </h1>
      <p className="subtitle is-size-4">A Leading Provider in Retina Care</p>
      <div className="buttons m-t-md">
        <a
          className={buttonStyles}
          href={anchor}
        >
          {nextSectionText}
        </a>
        <Link
          to="/contact/"
          className={buttonStyles}
        >
            Contact Us
        </Link>
      </div>
    </Hero>
  );
};

Jumbotron.propTypes = {
  anchor: PropTypes.string.isRequired,
};

export default Jumbotron;
