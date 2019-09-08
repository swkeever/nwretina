import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  label,
  name,
  ...rest
}) => {
  const [value, setValue] = useState('');

  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
        <div className="control">
          <textarea
            className="textarea"
            id={name}
            name={name}
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
