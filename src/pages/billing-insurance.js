import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Hero from '../components/hero';
import Image from '../components/image';
import Questions from '../components/contact-button';
import ContactButton from '../components/contact-button';

const BillingInsurance = (props) => {
  return null;
  
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);

  const getHtml = (title) => {
    const edge = data.allMarkdownRemark.edges.find((e) => (
      e.node.frontmatter.title === title
    ));
    return edge.node.html;
  };


  return (
    <Layout location="/billing-insurance/">
      <Head title="Billing & Insurance" />
      <Hero id="billing-insurance">
        <div className="columns is-vcentered">
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: getHtml('billing insurance info') }}
            />
            <a href="/billing-insurance/#providers" className="button is-primary">See Providers</a>
          </div>
          <div className="column">
            <Image path="sign-1.jpg" alt="Sign of NW Retina" />
          </div>
        </div>
      </Hero>
      <Hero id="providers">
        <div className="columns is-vcentered">
          <div className="column">
            <Image path="hero.jpg" alt="Marina" style={{ width: '80%' }} />
          </div>
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: getHtml('providers') }}
            />
          </div>
        </div>
        <ContactButton />
      </Hero>
    </Layout>
  );
};

BillingInsurance.propTypes = {

};

export default BillingInsurance;
