import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ items, title, active, setActive, id }) => {
  const steps = items.map((item, index) => (
    <>
      <li className="dropdown-item">
        {item}
      </li>
      {index < items.length - 1 && <hr className="dropdown-divider" />}
    </>
  ));

  return (
    <div className={`dropdown ${active && 'is-active'}`}>
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu2"
          onClick={() => setActive(!active)}
        >
          <span>{title}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id={id} role="list">
        <div className="dropdown-content">
          <ol>
            {steps}
          </ol>
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Dropdown;
