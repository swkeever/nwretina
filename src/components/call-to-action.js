import React from 'react';
import PropTypes from 'prop-types';
import { ContactButton } from '.';
import toAnchorLink from '../functions/to-anchor-link';

const CallToAction = ({ contentArray, index }) => {
  if (!contentArray || !contentArray.length) {
    throw new Error('contentArrayay must have a length > 0');
  }

  if (index === contentArray.length - 1) {
    return <ContactButton />;
  }

  console.log('hi', contentArray[index + 1])

  const nextAnchor = toAnchorLink(contentArray[index + 1].id);

  return (
    <a
      className="button is-primary"
      href={nextAnchor}
    >
      Learn more
    </a>
  );
};

CallToAction.propTypes = {

};

export default CallToAction;
