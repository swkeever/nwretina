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
        <div className="columns is-vcentered">
          <div className="column">
            <div className="content">
              <h2>Driving Directions</h2>
              <p>Where are you coming from?</p>
            </div>

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
            <div className="content">
              <p>
                {`Directions coming from ${north ? 'north' : 'south'}:`}
              </p>
              <ol>
                {directions}
              </ol>
            </div>
          </div>
          <div className="column is-two-thirds">
            <p className="help is-info m-b-sm">Zoom in on the map to take a closer look.</p>
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
