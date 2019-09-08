import React from 'react';
import { render } from '@testing-library/react';
import TextArea from '../text-area';

const props = {
  label: 'Message',
  name: 'message',
  validation: {
    isValid: (value) => value === utils.goodInput,
    success: '✔️',
    error: '💩',
  },
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
