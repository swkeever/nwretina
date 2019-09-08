import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../input';

const utils = {
  badInput: 'bad',
  goodInput: 'good',
};

const props = {
  label: 'Test',
  name: 'test',
  validation: {
    isValid: (value) => value === utils.goodInput,
    success: 'Success!',
    error: 'Oh no!',
  },
  placeholder: 'Jane Doe',
};

const setup = () => {
  const lib = render(<Input {...props} />);
  const input = lib.getByLabelText(props.label);
  return {
    input,
    ...lib,
  };
};

test('Placeholder text is present', () => {
  const { input, ...lib } = setup();
  lib.getByPlaceholderText(props.placeholder);
});

test('Bad input results in error message', () => {
  const { input, ...lib } = setup();
  fireEvent.change(input, {
    target: {
      value: utils.badInput,
    },
  });
  lib.getByText(props.validation.error);
});

test('Good input results in success message', () => {
  const { input, ...lib } = setup();
  fireEvent.change(input, {
    target: {
      value: utils.goodInput,
    },
  });
  lib.getByText(props.validation.success);
});
