import React from 'react';
import { render } from '@testing-library/react';
import Content from '../content';
import getContent from '../../functions/get-content';
import routes from '../../utils/routes';

const contents = [
  {
    id: '1',
    html: '<div><h1>Hello</h1></div>',
    image: {
      src: '__mocks__/apple.png',
      alt: 'Apple',
    },
    title: 'Hello world',
  },
];

const props = {
  slugPrefix: routes.home.slug,
};

jest.mock('../../functions/get-content');
getContent.mockResolvedValue(contents);

test('Able to see content', () => {
  const component = render(<Content {...props} />);
  contents.forEach((content) => {
    component.getByText(content.title);
  });
});
