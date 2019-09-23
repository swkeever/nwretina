import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from '../contact-form';

const setup = () => render(<ContactForm />);

test('Has a submit button', () => {
  const component = setup();
  const button = component.getByText(/submit/i);
  expect(button.tagName).toBe('BUTTON');
});

test('Has a name field', () => {
  const component = setup();
  const input = component.getByLabelText(/name/i);
  expect(input.getAttribute('type')).toBe('text');
});

test('should have an email field', () => {
  const component = setup();
  const input = component.getByLabelText(/email/i);
  expect(input.getAttribute('type')).toBe('email');
});

test('should have a textarea', () => {
  const component = setup();
  const input = component.getByLabelText(/message/i);
  expect(input.tagName).toBe('TEXTAREA');
});

// Right now, the RECAPTCHA is not implemented
// test('should have a recaptcha', () => {
//   const component = setup();
//   const element = component.getByTestId('recaptcha');
//   expect(element).toBeDefined();
// });
