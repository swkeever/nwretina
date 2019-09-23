import React from 'react';
import { Link } from 'gatsby';
import Heading from './heading';

const CallToAction = () => (
  <div className="has-text-centered p-t-lg">
    <Heading>
      Questions?
    </Heading>
    <Link
      className="button is-outlined is-primary is-medium"
      data-testid="contact-link"
      to="/contact/"
    >
      Contact Us
    </Link>
  </div>
);

export default CallToAction;
