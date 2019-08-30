import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Hero from '../components/hero';
import Map from '../components/map';
import getGoogleMapsLink from '../functions/get-google-maps-link';

const Location = (props) => {
  const [north, setNorth] = useState(true);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          address {
            street {
              line1
              line2
            }
            city
            state
            zipCode
          }
          externalLinkProps {
            target
            rel
          }
        }
      }
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

  const {
    address,
    externalLinkProps,
  } = data.site.siteMetadata;

  const getDirections = () => {
    const title = north ? 'directions from north' : 'directions from south';
    const edge = data.allMarkdownRemark.edges.find((e) => e.node.frontmatter.title === title);
    return edge.node.html;
  };

  const addressSize = 'is-size-6';

  return (
    <Layout location="/location/">
      <Head title="Location" />
      <Hero id="driving-directions">
        <div className="columns is-vcentered">
          <div className="column">

            <div className="content">
              <h2>Address</h2>
              <p>
                <a href={getGoogleMapsLink()} {...externalLinkProps}>
                  {
                    `
                    ${address.street.line1}, ${address.street.line2}
                    ${address.city}, ${address.state} ${address.zipCode}
                    `
                  }
                </a>
              </p>

              <h4>Driving Directions</h4>
              <p>Where are you coming from?</p>

            </div>

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
