import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useStaticQuery, graphql } from 'gatsby';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none',
};

const CityPin = ({ size }) => (
  <svg
    height={size}
    viewBox="0 0 24 24"
    style={{
      ...pinStyle,
      transform: `translate(${-size / 2}px,${-size}px)`,
    }}
  >
    <path d={ICON} />
  </svg>
);

CityPin.defaultProps = {
  size: 20,
};

CityPin.propTypes = {
  size: PropTypes.number,
};

const Map = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          address {
            coordinates {
              latitude
              longitude
            }
          }
        }
      }
    }
  `);

  const { coordinates } = data.site.siteMetadata.address;

  const [viewport, setViewport] = useState(
    {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      zoom: 11,
    },
  );

  const onViewportChange = (vp) => setViewport({ ...viewport, ...vp });

  const resizeMap = () => {
    onViewportChange({
      width: '100%',
      height: '50vh',
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeMap);
    resizeMap();
    return () => window.removeEventListener('resize', resizeMap);
  }, []);

  return (
    <div className="container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.MAP_ACCESS_TOKEN}
        onViewportChange={onViewportChange}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={coordinates.longitude}
          latitude={coordinates.latitude}
        >
          <CityPin size={25} />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
