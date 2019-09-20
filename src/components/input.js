import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';

const Input = ({
  label,
  name,
  validation,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const isValid = validation.isValid(value);
  const color = isValid ? 'is-primary' : 'is-danger';

  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
        <div className="control has-icons-right">
          <input
            className={`input ${color}`}
            id={name}
            name={name}
            value={value}
            onChange={({ target }) => setValue(target.value)}
            required
            {...rest}
          />
          {
            isValid
            && (
            <span className="icon is-small is-right">
              <Icon name="check" />
            </span>
            )
          }
        </div>
      </label>
      <p className={`help ${color}`}>
        {isValid ? validation.success : validation.error}
      </p>
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
