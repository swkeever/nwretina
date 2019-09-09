import React from 'react';
import { Link } from 'gatsby';

const CallToAction = () => (
  <div className="has-text-centered">
    Questions?
    {' '}
    <Link
      className="has-text-link"
      data-testid="contact-link"
      to="/contact/"
    >
      Contact Us
    </Link>
  </div>
);

export default CallToAction;
