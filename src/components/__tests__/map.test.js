import React from 'react';
import { render } from '@testing-library/react';
import Map, { EMBED_MAP_SRC } from '../map';

test('should produce iframe with google map', () => {
  const component = render(<Map />);
  const src = component
    .getByTestId('map')
    .getAttribute('src');
  expect(src).toBe(EMBED_MAP_SRC);
});
