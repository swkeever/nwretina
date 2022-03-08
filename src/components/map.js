import React from 'react';

const mapStyle = {
  border: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

};

const containerStyle = {
  position: 'relative',
  paddingBottom: '20em',
  height: 0,
  overflow: 'hidden',
};

export const EMBED_MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.954183807548!2d-122.2246638845308!3d47.9952725690408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aaab222715759%3A0xcbbb7a04f5348df7!2sNW%20Retina%20LLC!5e0!3m2!1sen!2sus!4v1569090042946!5m2!1sen!2sus';

const Map = () => (
  <div style={containerStyle} className="container nw-image">
    <iframe
      title="map"
      data-testid="map"
      src={EMBED_MAP_SRC}
      width="600"
      height="450"
      frameBorder="0"
      style={mapStyle}
      allowFullScreen
    />
  </div>
);

export default Map;
