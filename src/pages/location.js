import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Hero from '../components/hero';

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

  const dirs = data.site.siteMetadata.directions;

  const directions = (
    north
      ? dirs.fromNorth.map((step) => <li className="is-size-4">{step}</li>)
      : dirs.fromSouth.map((step) => <li>{step}</li>)
  );

  return (
    <Layout location="/location/">
      <Head title="Location" />
      <Hero id="driving-directions">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">Driving Directions</h1>
            <h2 className="subtitle is-2">Where are you coming from?</h2>
            <div className="buttons">
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
                <p>Coming from the {north ? 'North' : 'South'}:</p>
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
        
      </Hero>
    </Layout>
  );
};

Location.propTypes = {

};

export default Location;
