import React from 'react';
import {
  Layout,
  Head,
  Hero,
  Map,
  CallToAction,
} from '../components';
import getGoogleMapsLink from '../functions/get-google-maps-link';
import getAddress from '../functions/get-address';
import getExternalLinkProps from '../functions/get-external-link-props';

const Location = () => {
  const externalLinkProps = getExternalLinkProps();

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
            </div>
          </div>
          <div className="column is-three-fifths">
            <Map />
          </div>
        </div>
        <CallToAction />
      </Hero>
    </Layout>
  );
};

export default Location;
