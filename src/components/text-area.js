import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  label,
  name,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const minLength = 15;
  const isValid = value.length >= minLength;

  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
        <div className="control">
          <textarea
            className={`textarea ${isValid ? 'is-primary' : 'is-danger'}`}
            id={name}
            name={name}
            minLength={minLength}
            value={value}
            onChange={({ target }) => setValue(target.value)}
            required
            {...rest}
          />
        </div>
      </label>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextArea;
