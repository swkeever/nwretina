import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Hero } from '.';
import { nextSectionText, SITE_HEADER } from '../utils/constants';

const Jumbotron = ({ anchor }) => {
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
      <p className="subtitle is-4">Who We Are</p>
      <h1
        className="title"
      >
        {'A Leading Provider in Retina Care'}
      </h1>
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
