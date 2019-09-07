import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        nav: {
          internal: Array
          .from({length: 3})
          .map((_, index) => (
            {
              link: `/test${index}/`,
              name: `Test ${index}`
            }
          ))
        }
      }
    }
  })
});
const hi = "hi";


test('Shows active link when cilcked', () => {

});