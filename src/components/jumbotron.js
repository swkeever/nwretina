import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Hero } from '.';
import { nextSectionText, SITE_HEADER } from '../utils/constants';
import routes from '../utils/routes';

const Jumbotron = ({ anchor, imageSrc }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
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
      image={imageSrc}
      id={SITE_HEADER}
    >
      <h1
        className="title"
      >
        {data.site.siteMetadata.titleFull}
      </h1>
      <p className="subtitle is-4">A Leading Provider in Retina Care</p>

      <div className="buttons m-t-md">
        <a
          className={buttonStyles}
          href={anchor}
        >
          {nextSectionText}
        </a>
        <Link
          to={routes.contact.href}
          className={buttonStyles}
        >
          Contact Us
        </Link>
      </div>
    </Hero>
  );
};

Jumbotron.defaultProps = {
  imageSrc: '/uploads/pnw.jpg',
};

Jumbotron.propTypes = {
  imageSrc: PropTypes.string,
  anchor: PropTypes.string.isRequired,
};

export default Jumbotron;
