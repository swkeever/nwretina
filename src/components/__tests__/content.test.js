import React from 'react';
import { render } from '@testing-library/react';
import Content from '../content';
import routes from '../../utils/routes';
import { data } from '../../../setup-test-env';

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
