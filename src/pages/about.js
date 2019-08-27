import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Head from '../components/head';
import Image from '../components/image';

const About = (props) => {
  return (
    <Layout location="/about/">
      <Head title="About" />
      <section className="hero is-info is-fullheight is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column">
                <h1 className="title is-1">About Us</h1>
                <h2 className="subtitle is-2">Michael Osetinsky, MD</h2>
                <div className="content">
                Dr. Osetinsky received his Bachelor of Science in Engineering
                from Duke University in 1980. Later went on to receive his
                medical degree at Louisiana State University, School of Medicine
                in 1984. Following the completion of his residency training
                at South Carolina Eye Institute in June of 1991. Dr. Osetinsky
                then concluded his fellowship in Vitreo-Retinal disease at the
                West Virginia Health Sciences Center in Morgantown, West Virginia
                in 1992. Dr. Osetinsky is certified by the American Board of Ophthalmology.
                </div>
              </div>
              <div className="column">
                <figure className="image">
                  <Image path="sign-mo.jpg" alt="Dr. Michael Osetinsky" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

About.propTypes = {

};

export default About;
