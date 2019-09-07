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
import Header from '../components/header';
import toAnchorLink from '../functions/to-anchor-link';
import Jumbotron from '../components/jumbotron';
import CallToAction from '../components/call-to-action';

export default () => {
  const home1 = getContent(slugs.home.one);
  const home2 = getContent(slugs.home.two);
  const home3 = getContent(slugs.home.three);

  const content = [home1, home2, home3];

  console.log(home1)

  const showContent = () => content.map((c, i) => (
    <Hero id={c.id}>
      <div className={`columns is-vcentered ${i % 2 !== 0 && 'has-column-order-reversed'}`}>
        <div className="column">
          <Header content={c.header} />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: c.html }}
          />
          <CallToAction
            contentArray={content}
            index={i}
          />
        </div>
        <div className="column">
          <Image
            src={c.image.src}
            alt={c.image.alt}
          />
        </div>
      </div>
    </Hero>
  ));

  return (
    <Layout location="/">
      <Head title="Home" />
      {/* <Jumbotron anchor={toAnchorLink(home1.id)} /> */}
      {showContent()}
    </Layout>
  );
};
