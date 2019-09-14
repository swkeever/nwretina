import React from 'react';
import PropTypes from 'prop-types';
import childrenType from '../types/children';
import Hero from './hero';

const Section = ({ children, id }) => (
  <section
    id={id}
    className="section has-background-light is-fullheight"
  >
    <Hero id={id}>
      {children}
    </Hero>
  </section>
);

Section.propTypes = {
  children: childrenType.isRequired,
  id: PropTypes.string.isRequired,
};

export default Section;
