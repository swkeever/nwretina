import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Hero, ContactInfo } from '.';
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
    is-medium
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
        {data.site.siteMetadata.titleFull}
      </h1>
      <ContactInfo color="light" />
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
