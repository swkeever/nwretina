import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Head from '../components/head';
import Image from '../components/image';
import Hero from '../components/hero';
import ContactButton from '../components/contact-button';

const About = (props) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {
        title: {
          eq: "about us"
        }
      }) {
        html
      }
    }
  `);

  return (
    <Layout location="/about/">
      <Head title="About" />
      <Hero id="about">
        <div className="columns is-vcentered">
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
          <div className="column">
            <figure className="image">
              <Image path="sign-mo.jpg" alt="Dr. Michael Osetinsky" />
            </figure>
          </div>
        </div>
        <ContactButton />
      </Hero>
    </Layout>
  );
};

About.propTypes = {

};

export default About;
