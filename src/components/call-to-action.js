import React from 'react';
import { Link } from 'gatsby';
import Heading from './heading';

const color = 'dark';

const CallToAction = () => (
  <section style={{ marginTop: '-3em' }} className="section has-background-info has-text-centered p-t-lg">
    <Heading color={color} tag="h2">
      Questions?
    </Heading>
    <Link
      className={`button is-outlined is-${color} is-medium`}
      data-testid="contact-link"
      to="/contact/"
    >
      Contact Us
    </Link>
  </section>
);

export default CallToAction;
