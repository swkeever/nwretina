import React from 'react';
import PropTypes from 'prop-types';
import {
  Hero,
  Image,
  CallToAction,
  Heading,
  Jumbotron,
} from '.';
import toAnchorLink from '../utils/to-anchor-link';
import navLinks from '../utils/routes';
import { nextSectionText } from '../utils/constants';
import getContent from '../utils/get-content';

const Content = ({ slugPrefix }) => {
  const contents = getContent(slugPrefix);

  const anchorPrefix = slugPrefix === navLinks.home.slug
    ? ''
    : slugPrefix;

  const contentElements = contents.map((content, i) => {
    const isLastElement = i === contents.length - 1;
    const evenIdx = i % 2 === 0;

    return (
      <Hero key={content.id} id={content.id}>
        <div
          className={`
            columns 
            is-vcentered 
            ${!evenIdx && 'has-column-order-reversed'}`}
        >
          <div className="column">
            <Heading>
              {content.title}
            </Heading>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content.html }}
            />
            {
              !isLastElement && (
                <a
                  className="button is-primary"
                  data-scroll
                  href={`${anchorPrefix}${toAnchorLink(contents[i + 1].id)}`}
                >
                  {nextSectionText}
                </a>
              )
            }
          </div>
          <div className="column">
            <Image
              src={content.image.src}
              alt={content.image.alt}
            />
          </div>
        </div>
      </Hero>
    );
  });

  return (
    <>
      {
        contents.length && slugPrefix === navLinks.home.slug
          ? <Jumbotron anchor={toAnchorLink(contents[0].id)} />
          : null
      }
      {contentElements}
      <CallToAction />
    </>
  );
};


Content.propTypes = {
  slugPrefix: PropTypes.string.isRequired,
};

export default Content;
