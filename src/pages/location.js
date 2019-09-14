import React from 'react';
import {
  Layout,
  Head,
  Hero,
  Map,
  CallToAction,
  Heading,
} from '../components';
import getAddress from '../utils/get-address';
import navLinks from '../utils/routes';
import { externalLinkProps, googleMaps } from '../utils/links';

const Location = () => (
  <Layout>
    <Head title={navLinks.location.name} />
    <Hero id="our-address">
      <div className="columns is-vcentered">
        <div className="column">
          <div className="content">
            <Heading>{navLinks.location.name}</Heading>
            <span className="help">
                Click the link below to get directions from Google Maps.
            </span>
            <p>
              <a className="has-text-link" href={googleMaps.href} {...externalLinkProps}>
                {getAddress()}
              </a>
            </p>
          </div>
        </div>
        <div
          className="column"
        >
          <Map />
        </div>
      </div>
      <CallToAction />
    </Hero>

  </Layout>
);

export default Location;
