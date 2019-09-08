import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Hero,
  Image,
  CallToAction,
} from '.';
import getContent from '../functions/get-content';
import toAnchorLink from '../functions/to-anchor-link';
import Jumbotron from './jumbotron';
import navLinks from '../utils/routes';

const Content = ({ slugPrefix }) => {
  const contents = getContent(slugPrefix);
  const anchorPrefix = slugPrefix === navLinks.home.slug ? '' : slugPrefix;
  const jumbotronElement = slugPrefix === navLinks.home.slug
    ? <Jumbotron anchor={toAnchorLink(contents[0].id)} />
    : null;

  const contentElements = contents.map((content, i) => {
    const isLastElement = i === contents.length - 1;

    return (
      <>
        <Hero id={content.id}>
          <div className={`
            columns 
            is-vcentered 
            ${i % 2 !== 0 && 'has-column-order-reversed'}`}
          >
            <div className="column">
              <Header>{content.title}</Header>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content.html }}
              />
              {
                !isLastElement && (
                  <a
                    className="button is-primary"
                    href={`${anchorPrefix}${toAnchorLink(contents[i + 1].id)}`}
                  >
                    Learn more
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
          {isLastElement && <CallToAction />}
        </Hero>
      </>
    );
  });

  return (
    <>
      {jumbotronElement}
      {contentElements}
    </>
  );
};

Content.propTypes = {
  slugPrefix: PropTypes.string.isRequired,
};

export default Content;
