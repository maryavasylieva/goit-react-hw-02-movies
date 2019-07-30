import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Movie.module.css';

const SearchBar = ({ value, onFilterMovies }) => (
  <>
    <input
      type="text"
      className={styles.input}
      onChange={onFilterMovies}
      value={value}
      placeholder="Search your favourite film..."
    />
  </>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterMovies: PropTypes.func.isRequired,
};

export default SearchBar;
