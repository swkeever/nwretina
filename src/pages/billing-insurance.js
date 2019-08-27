import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Hero from '../components/hero';
import Image from '../components/image';

const BillingInsurance = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          insuranceProviders
        }
      }
    }
  `);

  const providers = data.site.siteMetadata.insuranceProviders.map((provider) => (
    <li>
      {provider}
    </li>
  ));

  return (
    <Layout location="/billing-insurance/">
      <Head title="Billing & Insurance" />
      <Hero color="warning" id="billing-insurance">
        <div className="columns is-vcentered">
          <div className="column">
            <h1 className="title">Billing &amp; Insurance</h1>
            <div className="content">
              <p>
Northwest Retina, LLC is contracted with
                several insurance carriers. As a courtesy
                we will bill your insurance carrier for your
                visit, you will receive a billing statement
                from us after the insurance company has
                processed your claim.
              </p>
              <p>
              We encourage you to check with your insurance
              plan before making an appointment. This will
              allow you to become familiar with your coverage,
               copay and referral requirements.
              </p>
            </div>
            <a href="/billing-insurance/#providers" className="button is-info">See Providers</a>
          </div>
          <div className="column">
            <Image path="sign-1.jpg" alt="Sign of NW Retina" />
          </div>
        </div>
      </Hero>
      <Hero color="white" id="providers">
        <div className="columns is-vcentered">
          <div className="column">
            <Image path="hero.jpg" alt="Marina" style={{width: '80%'}} />
          </div>
          <div className="column">
            <h2 className="title">Available Providers</h2>
            <div className="content">
              <ul>
                {providers}
              </ul>
            </div>
          </div>
        </div>
      </Hero>

    </Layout>
  );
};

BillingInsurance.propTypes = {

};

export default BillingInsurance;
