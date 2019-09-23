import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextArea from '../text-area';

const props = {
  label: 'Message',
  name: 'message',
  placeholder: 'Jane Doe',
};

const setup = () => {
  const lib = render(<TextArea {...props} />);
  const textarea = lib.getByLabelText(props.label);
  return {
    textarea,
    ...lib,
  };
};

test('Placeholder text is present', () => {
  const { getByPlaceholderText } = setup();
  getByPlaceholderText(props.placeholder);
});

test('should change text when typed in', () => {
  const { textarea } = setup();
  fireEvent.change(textarea, {
    target: {
      value: 'hello world',
    },
  });
  expect(textarea.value).toBe('hello world');
});

test('should not be valid if constraints are not satisfied', () => {
  const { textarea, ...lib } = setup();
  lib.getByTestId('invalid-textarea');
  fireEvent.change(textarea, {
    target: {
      value: 'Quis do amet est incididunt officia commodo esse anim velit in.',
    },
  });
  lib.getByTestId('valid-textarea');
});
