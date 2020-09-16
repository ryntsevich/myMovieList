import React from 'react';
// import { Link } from 'react-router-dom';
// import { LANDING } from '../../constants/routes';
import PropTypes from 'prop-types';

import './SearchBar.css';
// import Spinner from '../Spinner/Spinner';

const SearchBar = props => {
  const { onChange, value, loading } = props;
  return (
    <div className="searchBar__container">
      <input
        className="searchBar__input"
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search..."
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SearchBar;
