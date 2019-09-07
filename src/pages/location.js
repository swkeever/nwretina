import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Hero from '../components/hero';
import Map from '../components/map';
import getGoogleMapsLink from '../functions/get-google-maps-link';
import getAddress from '../functions/get-address';
import Image from '../components/image';
import ContactButton from '../components/contact-button';
import getExternalLinkProps from '../functions/get-external-link-props';

const Location = (props) => {
  return null;
  
  const [north, setNorth] = useState(true);
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

  const externalLinkProps = getExternalLinkProps();

  const getDirections = () => {
    const title = north ? 'directions from north' : 'directions from south';
    const edge = data.allMarkdownRemark.edges.find((e) => e.node.frontmatter.title === title);
    return edge.node.html;
  };

  return (
    <Layout location="/location/">
      <Head title="Location" />
      <Hero id="our-address">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="content">
              <h2>Our Address</h2>
              <span className="help">
                Click the link below to get directions from Google Maps.
              </span>
              <p>
                <a href={getGoogleMapsLink()} {...externalLinkProps}>
                  {getAddress()}
                </a>
              </p>
              <a
                href="/location/#driving-directions"
                className="button is-primary"
              >
                Driving Directions
              </a>
            </div>
          </div>
          <div className="column is-two-thirds">
            <Map />
          </div>
        </div>
      </Hero>
      <Hero id="driving-directions">
        <div className="columns is-vcentered">
          <div className="column">
            <Image path="driving.jpg" alt="Driving a car" />
          </div>
          <div className="column">
            <div className="content">
              <h2>Where are you coming from?</h2>
              <div className="m-t-md buttons">
                <button
                  type="button"
                  className={`button is-primary ${!north && 'is-outlined'}`}
                  onClick={() => !north && setNorth(!north)}
                >
            North
                </button>
                <button
                  type="button"
                  className={`button is-danger ${north && 'is-outlined'}`}
                  onClick={() => north && setNorth(!north)}
                >
            South
                </button>
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: getDirections() }}
              />
            </div>
          </div>
        </div>
        <ContactButton />
      </Hero>
    </Layout>
  );
};

Location.propTypes = {

};

export default Location;
