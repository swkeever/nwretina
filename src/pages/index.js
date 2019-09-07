import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Head from '../components/head';
import ContactInfo from '../components/contact-info';
import Image from '../components/image';
import ContactButton from '../components/contact-button';
import slugs from '../utils/slugs';
import getContent from '../functions/get-content';

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
    }
  `);

  const home1 = getContent(slugs.home.one);
  const home2 = getContent(slugs.home.two);
  const home3 = getContent(slugs.home.three);

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
      <Hero id={home1.anchor}>
        <div className="columns is-vcentered">
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: home1.html }}
            />
            <a className="button is-primary" href={home2.anchor}>
              Learn more
            </a>
          </div>
          <div className="column">
            <figure className="image">
              <Image path={home1.image.src} alt={home1.image.alt} />
            </figure>
          </div>
        </div>
      </Hero>
      <Hero id={home2.anchor}>
        <div className="columns is-vcentered">
          <div className="column">
            <figure className="image">
              <Image path={home2.image.src} alt={home2.image.alt} />
            </figure>
          </div>
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: home2.html }}
            />
            <a className="button is-primary" href={home3.anchor}>
              Learn more
            </a>
          </div>
        </div>
      </Hero>
      <Hero id={home3.anchor}>
        <div className="columns is-vcentered">
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: home3.html }}
            />
          </div>
          <div className="column">
            <figure className="image">
              <Image
                path={home3.image.src}
                alt={home3.image.alt}
              />
            </figure>
          </div>
        </div>
        <ContactButton />
      </Hero>
    </Layout>
  );
};
