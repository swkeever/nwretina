import React from 'react';
import { Link } from 'gatsby';

const CallToAction = () => (
  <div className="has-text-centered">
    Questions?
    {' '}
    <Link to="/contact/">Contact Us</Link>
  </div>
);

export default CallToAction;
