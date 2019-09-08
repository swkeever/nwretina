import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import ContactForm from '../contact-form';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        email: 'office@nwretina.com',
      },
    },
  }));
});

test.skip('Add integration tests', () => {});
