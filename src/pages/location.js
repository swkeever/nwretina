import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Hero from '../components/hero';
import Map from '../components/map';

const Location = (props) => {
  const [north, setNorth] = useState(true);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          directions {
            fromNorth
            fromSouth
          }
        }
      }
    }
  `);

  const directions = (
    north
      ? data.site.siteMetadata.directions.fromNorth.map((step) => <li>{step}</li>)
      : data.site.siteMetadata.directions.fromSouth.map((step) => <li>{step}</li>)
  );

  return (
    <Layout location="/location/">
      <Head title="Location" />
      <Hero id="driving-directions">
        <div className="columns">
          <div className="column">
            <h2 className="is-size-2">Driving Directions</h2>
            <p className="is-size-4">Where are you coming from?</p>
            <div className="m-t-md buttons">
              <button
                type="button"
                className={`button is-info ${!north && 'is-outlined'}`}
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
          </div>
          <div className="column">
            <div className="container">
              <div className="content">
                <p>
                  {`Coming from the ${north ? 'North' : 'South'}:`}
                </p>
                <ol>
                  {directions}
                </ol>
              </div>
              <div className="container has-text-right">
                <a href="/location/#map" className="button is-primary">See Map</a>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <Hero id="map">
        <div className="columns is-one-third">
          <div className="column">
            <h2 className="is-size-2">Where We're Located</h2>
            <p className="is-size-4">Zoom in on the map to take a closer look.</p>
          </div>
          <div className="column is-two-thirds">
            <Map />
          </div>
        </div>
      </Hero>
    </Layout>
  );
};

Location.propTypes = {

};

export default Location;
