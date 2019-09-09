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
  const alt = 'Does not exist';
  const component = render(<Image src="oops" alt={alt} />);
  expect(component.queryByTestId(alt)).toBeNull();
});
