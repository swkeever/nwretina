import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  name,
  validation,
  ...rest
}) => {
  const [value, setValue] = useState('');

  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
        <div className="control">
          <input
            className="input"
            id={name}
            name={name}
            value={value}
            onChange={({ target }) => setValue(target.value)}
            required
            {...rest}
          />
        </div>
      </label>
      {
      validation.isValid(value)
        ? (
          <p className="help is-primary">
            {validation.success}
          </p>
        )
        : (
          <p className="help is-danger">
            {validation.error}
          </p>
        )
      }
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validation: PropTypes.shape({
    isValid: PropTypes.func.isRequired,
    success: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default Input;
