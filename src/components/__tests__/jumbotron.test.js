import React from 'react';
import { render } from '@testing-library/react';
import Jumbotron from '../jumbotron';
import { data, acceptSubstrings, testImage } from '../../../setup-test-env';

const props = {
  anchor: 'test',
  imageSrc: testImage,
};

const setup = () => render(<Jumbotron {...props} />);

test('should show the title', () => {
  const component = setup();
  component.getByText(data.site.siteMetadata.titleFull);
});

test('should have some buttons guiding the user', () => {
  const component = setup();
  component.getByText(/contact/i, acceptSubstrings);
});
