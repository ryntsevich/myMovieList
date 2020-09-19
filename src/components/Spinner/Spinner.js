import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.css';

export const Spinner = ({ type, className }) => {
  return (
    <div className="Container">
      <span className="Spinner" />
    </div>
  );
};

Spinner.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

Spinner.defaultProps = {
  type: 'big',
  className: '',
};

export default Spinner;
