import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Head from '../components/head';
import ContactInfo from '../components/contact-info';
import Image from '../components/image';
import ContactButton from '../components/contact-button';

const anchors = {
  OFFERED: 'what-we-offer',
  GENERAL_INFO: 'general-information',
  LOCATION: 'location',
  HEADER: 'header',
};

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleFull
        }
      }
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const getMarkdown = (t) => {
    const edge = data.allMarkdownRemark.edges.find((e) => e.node.frontmatter.title === t);
    return edge.node.html;
  };

  return (
    <Layout location="/">
      <Head title="Home" />
      <Hero color="primary" id="nw-retina-header">
        <h1 className="title">
          {data.site.siteMetadata.title}
        </h1>
        <p className="subtitle">
          {`Welcome to ${data.site.siteMetadata.titleFull}`}
        </p>
        <ContactInfo color="light" />
        <div className="buttons m-t-md">
          <a
            className="button is-white is-outlined"
            href={`/#${anchors.OFFERED}`}
          >
            Learn more
          </a>
          <Link
            to="/contact/"
            className="button is-white is-outlined"
          >
          Contact Us
          </Link>
        </div>

      </Hero>
      <Hero id={anchors.OFFERED}>
        <div className="columns is-vcentered">
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: getMarkdown('intro') }}
            />
            <a className="button is-primary" href={`/#${anchors.GENERAL_INFO}`}>Learn more</a>
          </div>
          <div className="column">
            <figure className="image">
              <Image path="dr-osetinsky.png" alt="Dr. Osetinsky" />
            </figure>
          </div>
        </div>
      </Hero>
      <Hero id={anchors.GENERAL_INFO}>
        <div className="columns is-vcentered">
          <div className="column">
            <figure className="image">
              <Image path="home-office.png" alt="Office" />
            </figure>
          </div>
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: getMarkdown('your care') }}
            />
            <a className="button is-primary" href={`/#${anchors.LOCATION}`}>
              Learn more
            </a>
          </div>
        </div>
      </Hero>
      <Hero id={anchors.LOCATION}>
        <div className="columns is-vcentered">
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: getMarkdown('location intro') }}
            />
          </div>
          <div className="column">
            <figure className="image">
              <Image
                path="sign-2.jpg"
                alt="Northwest Retina sign from outside"
              />
            </figure>
          </div>
        </div>
        <ContactButton />

      </Hero>
    </Layout>
  );
};
