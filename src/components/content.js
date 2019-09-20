import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Hero,
  Image,
  CallToAction,
  Heading,
} from '.';
import toAnchorLink from '../utils/to-anchor-link';
import Jumbotron from './jumbotron';
import navLinks from '../utils/routes';
import { nextSectionText } from '../utils/constants';

const getContent = (slugPrefix) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              order
              title
              image
              page
              imageDescription
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges
    .filter((e) => e.node.fields.slug.startsWith(slugPrefix))
    .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
    .map((e) => ({
      id: e.node.id.toString(),
      html: e.node.html,
      image: {
        src: e.node.frontmatter.image,
        alt: e.node.frontmatter.imageDescription,
      },
      title: e.node.frontmatter.title,
    }));
};

const Content = ({ slugPrefix }) => {
  const contents = getContent(slugPrefix);
  const anchorPrefix = slugPrefix === navLinks.home.slug ? '' : slugPrefix;
  const isHomePage = slugPrefix === navLinks.home.slug;
  const jumbotronElement = contents.length && isHomePage
    ? <Jumbotron anchor={toAnchorLink(contents[0].id)} />
    : null;

  const contentElements = contents.map((content, i) => {
    const isLastElement = i === contents.length - 1;
    const eventhElement = i % 2 === 0;
    const fadeDirection = !eventhElement ? 'left' : 'right';
    const fadeEnabled = isHomePage ? {
      'data-aos': `fade-${fadeDirection}`,
    } : null;

    return (
      <Hero key={content.id} id={content.id}>
        <div
          {...fadeEnabled}
          className={`
            columns 
            is-vcentered 
            ${!eventhElement && 'has-column-order-reversed'}`}
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
        {isLastElement && <CallToAction />}
      </Hero>
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
