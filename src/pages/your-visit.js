import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Head from '../components/head';
import Image from '../components/image';
import Hero from '../components/hero';
import ContactButton from '../components/contact-button';

const YourVisit = (props) => {
  return null;
  
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {
        title: {
          eq: "your visit"
        }
      }) {
        html
      }
    }
  `);

  return (
    <Layout location="/your-visit/">
      <Head title="Your Visit" />
      <Hero id="your-visit">
        <div className="columns is-vcentered">
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
          <div className="column ">
            <figure className="image ">
              <Image
                style={{ width: '75%' }}
                className="has-image-centered"
                path="mo-working.jpg"
                alt="Dr. Osetinsky working"
              />
            </figure>
          </div>
        </div>
        <ContactButton />
      </Hero>

    </Layout>
  );
};

YourVisit.propTypes = {

};

export default YourVisit;
