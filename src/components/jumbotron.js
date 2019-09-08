import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Hero, ContactInfo } from '.';

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
      <h1 className="title is-1 has-text-light">
        {data.site.siteMetadata.titleFull}
      </h1>
      <ContactInfo color="light" />
      <div className="buttons m-t-md">
        <a
          className="button is-light is-outlined"
          href={anchor}
        >
            Learn more
        </a>
        <Link
          to="/contact/"
          className="button is-light is-outlined"
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
