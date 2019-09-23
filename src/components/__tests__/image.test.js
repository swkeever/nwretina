/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import Image from '../image';

useStaticQuery.mockImplementation(() => ({
  allFile: {
    edges: [
      {
        node: {
          relativePath: '/does/not/exist',
        },
      },
    ],
  },
}));

test('should throw error if src does not exist', () => {
  // turn off error message since its expected
  const originalError = console.error;
  console.error = jest.fn();

  const alt = 'Does not exist';
  expect(() => {
    render(<Image src="oops" alt={alt} />);
  }).toThrow();

  console.error = originalError;
});
