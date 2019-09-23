import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../footer';
import routes from '../../utils/routes';
import links from '../../utils/links';
import { acceptSubstrings, data } from '../../../setup-test-env';

const setup = () => render(<Footer />);

test('I can the navigate links', () => {
  const component = setup();
  Object
    .values(routes)
    .forEach((route) => {
      // we get all because theres multiple text that say 'contact'
      const allLinks = component.getAllByText(route.name);
      const link = allLinks.find((x) => x.hasAttribute('href'));
      expect(link.getAttribute('href')).toBe(route.href);
    });
});

test('I can see external links', () => {
  const component = setup();
  links.forEach((link) => {
    const element = component.getByText(link.name);
    expect(element.getAttribute('href')).toBe(link.href);
  });
});

describe('I can see contact info', () => {
  test('I can see the office hours', () => {
    const component = setup();
    const { officeHours } = data.site.siteMetadata;
    Object
      .values(officeHours)
      .forEach((element) => {
        component.getByText(element, acceptSubstrings);
      });
  });

  test('I can see the address', () => {
    const component = setup();
    const { address } = data.site.siteMetadata;
    component.getByText(address.street.line1, acceptSubstrings);
    component.getByText(address.street.line2, acceptSubstrings);
    component.getByText(address.city, acceptSubstrings);
    component.getByText(address.state, acceptSubstrings);
    component.getByText(address.zipCode.toString(), acceptSubstrings);
  });

  test('I can see the office phone number', () => {
    const component = setup();
    component.getByText(data.site.siteMetadata.phone.office, acceptSubstrings);
  });

  test('I can see the fax phone number', () => {
    const component = setup();
    component.getByText(data.site.siteMetadata.phone.fax, acceptSubstrings);
  });
});

test('Has a site map', () => {
  const component = setup();
  const link = component.getByText(/sitemap/i, acceptSubstrings);
  expect(link.getAttribute('href')).toBe('/sitemap.xml');
});

test('Has an admin portal', () => {
  const component = setup();
  const link = component.getByText(/admin/i);
  expect(link.getAttribute('href')).toBe('/admin/');
});

test('Has a copyright', () => {
  const component = setup();
  component.getByText(/copyright/i);
});

test('Has up to date year', () => {
  const component = setup();
  component.getByText(new Date().getFullYear().toString(), acceptSubstrings);
});

test('Has developer credits', () => {
  const component = setup();
  component.getByText(data.site.siteMetadata.developer.name, acceptSubstrings);
});

test('Has social media links', () => {
  const component = setup();
  const { socialMedia } = data.site.siteMetadata;
  Object
    .values(socialMedia)
    .forEach((link) => {
      const element = component.getByTestId(link.name);
      expect(element.getAttribute('href')).toBe(link.href);
    });
});

test('Has the company name', () => {
  const component = setup();
  component.getByText(data.site.siteMetadata.titleFull, acceptSubstrings);
});
