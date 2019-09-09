import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import Content from '../content';
import routes from '../../utils/routes';
import { nextSectionText } from '../../utils/constants';

const image = '__mocks__/apple.png';

const data = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: '1',
          html: '<div><p>Lorem nostrud ex reprehenderit pariatur eu magna veniam voluptate voluptate pariatur nostrud exercitation.</p></div>',
          frontmatter: {
            order: 1,
            title: 'Your Eyes Matter 👀',
            image: `/${image}`,
            page: routes.about.name,
            imageDescription: 'Apple',
          },
          fields: {
            slug: routes.about.slug,
          },
        },
      },
      {
        node: {
          id: '2',
          html: '<div><p>In esse deserunt tempor officia minim ex dolore est commodo laboris culpa esse aute.</p></div>',
          frontmatter: {
            order: 2,
            title: 'Retina Care',
            image: `/${image}`,
            page: routes.about.name,
            imageDescription: '🍎',
          },
          fields: {
            slug: routes.about.slug,
          },
        },
      },
      {
        node: {
          id: '3',
          html: '<div><p>In esse <strong>deserunt</strong> tempor officia minim ex dolore est commodo laboris culpa esse aute.</p></div>',
          frontmatter: {
            order: 3,
            title: 'We Put Patients First',
            image: `/${image}`,
            page: routes.about.name,
            imageDescription: '😃',
          },
          fields: {
            slug: routes.about.slug,
          },
        },
      },
    ],
  },
  allFile: {
    edges: [
      {
        node: {
          childImageSharp: {
            fluid: {
              base64: 'base64',
              aspectRatio: 1.0,
              src: image,
              srcSet: image,
              sizes: '100',
            },
          },
          relativePath: `${image}`,
        },
      },
    ],
  },
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
