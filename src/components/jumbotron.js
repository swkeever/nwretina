import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Hero, ContactInfo } from '.';
import getFluidImage from '../functions/get-fluid-image';
import BackgroundSection from './background-image';

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

  return (
    <Hero
      color="primary"
      image="/uploads/pnw.jpg"
    >
      <h1 className="title">
        {data.site.siteMetadata.title}
      </h1>
      <p className="subtitle">
        {`Welcome to ${data.site.siteMetadata.titleFull}`}
      </p>
      <ContactInfo color="light" />
      <div className="buttons m-t-md">
        <a
          className="button is-white is-outlined"
          href={anchor}
        >
            Learn more
        </a>
        <Link
          to="/contact/"
          className="button is-white is-outlined"
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
