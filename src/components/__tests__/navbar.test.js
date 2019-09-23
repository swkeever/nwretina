import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../navbar';
import navLinks from '../../utils/routes';

test('Menu is initially not open', () => {
  const component = render(<Navbar />);
  component.getByTestId('menu-inactive');
});

test('Clicking the burger makes the menu active', () => {
  const component = render(<Navbar />);
  const button = component.getByTestId('burger');
  fireEvent.click(button);
  component.getByTestId('menu-active');
});

test('All links show up', () => {
  const component = render(<Navbar />);
  Object
    .values(navLinks)
    .forEach((navLink) => {
      component.getByText(navLink.name);
    });
});
