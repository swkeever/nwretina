import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import Content from '../content';
import routes from '../../utils/routes';
import { nextSectionText } from '../../utils/constants';
import { siteData, allMarkdownRemarkData, allFileData } from '../../test-utils';

const data = {
  ...siteData,
  ...allMarkdownRemarkData,
  ...allFileData,
};

useStaticQuery.mockImplementation(() => data);

const props = {
  slugPrefix: routes.about.slug,
};

test('Able to see titles', () => {
  const component = render(<Content {...props} />);
  data.allMarkdownRemark.edges.forEach((edge) => {
    component.getByText(edge.node.frontmatter.title);
  });
});

test('Able to see images', () => {
  const component = render(<Content {...props} />);
  data.allMarkdownRemark.edges.forEach((edge) => {
    component.getByAltText(edge.node.frontmatter.imageDescription);
  });
});

test('I can see a button that takes me to the next section', () => {
  const component = render(<Content {...props} />);
  component.getAllByText(nextSectionText);
});

describe('Contact link', () => {
  test('Able to see a link to contact', () => {
    const component = render(<Content {...props} />);
    component.getByText(/contact/i);
  });

  test('Contact text is a link that takes to contact page', () => {
    const component = render(<Content {...props} />);
    const link = component.getByTestId('contact-link');
    expect(link.getAttribute('href')).toBe(routes.contact.href);
  });
});
