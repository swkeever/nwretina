import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Head from '../components/head';
import Image from '../components/image';
import Hero from '../components/hero';

const YourVisit = (props) => (
  <Layout location="/your-visit/">
    <Head title="Your Visit" />
    <Hero color="danger" id="your-visit">
      <div className="columns is-vcentered">
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
        <div className="column">
          <h1 className="title is-1">What to Expect During Your First Visit</h1>
          <div className="content">
            <p>
              Below is important information regarding your first appointment with Northwest Retina. Being prepared will allow your visit to be a pleasant experience.
            </p>
            <ul>
              <li>
                Please bring a list of current medications you are currently taking.
              </li>
              <li>
                Bring all medical insurance cards.
              </li>
              <li>
                If your insurance plans require a copayment, we accept Visa, MasterCard, cash and checks.
              </li>
              <li>
                Have photo identification available.
              </li>
              <li>
                Plan on two hours for your first visit.
              </li>
              <li>
                A driver is advised as your eyes will be dilated.
              </li>
              <li>
                Please check with your insurance to see if a referral is required for your visit.
              </li>
            </ul>
            <p>
              If you have any questions about the above information, please
              {' '}
              <Link className="has-text-info" to="/contact/">contact the office</Link>
              . We are always happy to help.
            </p>
          </div>
        </div>
      </div>
    </Hero>

  </Layout>
);

YourVisit.propTypes = {

};

export default YourVisit;
