import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Header,
  Hero,
  Image,
  ContactButton,
} from '.';
import getContent from '../functions/get-content';
import toAnchorLink from '../functions/to-anchor-link';
import Jumbotron from './jumbotron';
import slugs from '../utils/slugs';

const Content = ({ slugPrefix }) => {
  const content = getContent(slugPrefix);

  const jumbotronElement = slugPrefix === slugs.home ? <Jumbotron anchor={toAnchorLink(content[0].id)} /> : null;
  const anchorPrefix = slugPrefix === slugs.home ? '' : slugPrefix;

  const contentElements = content.map((c, i) => {
    const isLastElement = i === content.length - 1;

    return (
      <Hero id={c.id}>
        <div className={`columns is-vcentered ${i % 2 !== 0 && 'has-column-order-reversed'}`}>
          <div className="column">
            <Header content={c.title} />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: c.html }}
            />
            {
              !isLastElement && (
                <a
                  className="button is-primary"
                  href={`${anchorPrefix}${toAnchorLink(content[i + 1].id)}`}
                >
                Learn more
                </a>
              )
            }
          </div>
          <div className="column">
            <Image
              src={c.image.src}
              alt={c.image.alt}
            />
          </div>
        </div>
        {isLastElement && <ContactButton />}
      </Hero>
    );
  });

  console.log(contentElements);

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
