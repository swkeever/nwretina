import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Head from '../components/head';
import ContactInfo from '../components/contact-info';
import Image from '../components/image';

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

  return (
    <Layout location="/">
      <Head title="Home" />
      <Hero color="primary" id="nw-retina-header">
        <h1 className="title is-1">
          {data.site.siteMetadata.title}
        </h1>
        <p className="subtitle is-2">
          {`Welcome to ${data.site.siteMetadata.titleFull}`}
        </p>
        <ContactInfo />
        <a
          className="m-t-lg button is-info"
          isColor="info"
          href={`/#${anchors.OFFERED}`}
        >
          Learn more
        </a>
      </Hero>
      <Hero color="light" id={anchors.OFFERED}>
        <div className="columns is-vcentered">
          <div className="column">
            <div className="content">
              <h2 className="title is-2">
              Your Search for Retina Care is Over
              </h2>
              <p>
                <Link className="has-text-link" to="/about/">Dr. Michael Osetinsky</Link>
                {' '}
                has been a leading
                provider of retina eye care in Snohomish,
                King and Skagit counties for over 20 years.
              </p>
              <p>
                Our office uses state of the art equipment in
                the diagnosis and treatment of:
                <ul>
                  <li>
                    Diabetic Retinopathy
                  </li>
                  <li>
                    Retinal Detachment
                  </li>
                  <li>
                    Macular Degeneration
                  </li>
                  <li>
                    and other Vitreo-Retinal related diseases
                  </li>
                </ul>
              </p>
            </div>
            <a className="button is-info" href={`/#${anchors.GENERAL_INFO}`}>Learn more</a>
          </div>
          <div className="column">
            <figure className="image">
              <Image path="dr-osetinsky.png" alt="Dr. Osetinsky" />
            </figure>
          </div>
        </div>
      </Hero>
      <Hero color="danger" id={anchors.GENERAL_INFO}>
        <div className="columns is-vcentered">
          <div className="column">
            <figure className="image">
              <Image path="home-office.png" alt="Office" />
            </figure>
          </div>
          <div className="column">
            <div className="content">
              <h2 className="title is-2">
              Your Care is Our Priority
              </h2>
              <p>
                Patients can be referred to Dr. Osetinsky for their Vitreo-Retinal
                problems by their primary care physicians, ophthalmologist, and
                optometrist or may
                {' '}
                <Link className="has-text-info" to="/contact/">call directly</Link>
                {' '}
                if you know you have a retina concern.
              </p>
              <p>
                Together we will work with your doctor to provide you with the best
                possible care. We take pride in offering the highest quality in eye
                care in a friendly and professional atmosphere. Our office will strive
                to make sure you have a clear understanding of your retinal problems.
              </p>
            </div>
            <a className="button is-info" href={`/#${anchors.LOCATION}`}>
              Learn more
            </a>
          </div>
        </div>
      </Hero>
      <Hero color="info" id={anchors.LOCATION}>
        <div className="columns is-vcentered">
          <div className="column">

            <div className="content">
              <h2 className="title is-2">
              Location
              </h2>
              <p>
                Our Everett office is on the beautiful waterfront in the Marina Village.
                Dr. Osetinsky performs surgery at the new medical tower at Providence Everett Medical Center.
              </p>
              <Link className="button is-success" to="/location/">
                Get Directions
              </Link>
            </div>
          </div>
          <div className="column">
            <figure className="image">
              <Image path="sign-2.jpg" alt="Northwest Retina sign from outside" />
            </figure>
          </div>
        </div>
      </Hero>
    </Layout>
  );
};
