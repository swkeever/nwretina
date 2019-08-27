import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

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
      <section className="hero is-medium is-success is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Driving Directions</h1>
            <h2 className="subtitle is-2">Where are you coming from?</h2>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-medium">
            <div className="container">
              <ul>
                <li onClick={() => !north && setNorth(!north)} className={`tab ${north && 'is-active'}`}>
                  <a>
                    <span>North</span>
                  </a>
                </li>
                <li onClick={() => north && setNorth(!north)} className={`tab ${!north && 'is-active'}`}>
                  <a>
                    <span>South</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <div className="container section is-medium">
        <div className="content">
          <ol>
            {directions}
          </ol>
        </div>
        <div className="container has-text-centered">
          <a href="/location/#map" className="button is-info">See Map</a>
        </div>
      </div>
      <section id="map" className="section is-fullheight">
        MAP
      </section>
    </Layout>
  );
};

Location.propTypes = {

};

export default Location;
