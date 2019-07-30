import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styles from '../Movie.module.css';
import MovieCard from '../MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';

// const filterMovies = (items, query) =>
//   items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

const filterMovies = (items, query) => {
  return items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );
};
export default class MovieGrid extends Component {
  static defaultProps = {};

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    filter: '',
  };

  onFilterSearch = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { items } = this.props;
    const { filter } = this.state;
    const filterSearch = filterMovies(items, filter);

    return (
      <>
        <SearchBar value={filter} onFilterMovies={this.onFilterSearch} />

        <ul className={styles.movieGrid}>
          {filterSearch.length > 0 ? (
            filterSearch.map(elem => (
              <li key={elem.id}>
                <MovieCard {...elem} />
              </li>
            ))
          ) : (
            <h1>No matching result...</h1>
          )}
        </ul>
      </>
    );
  }
}

// filterSearch > 0 ? (filterSearch.map((elem) => (
//   <li key={elem.id}>
//     <MovieCard {...elem} />
//   </li>
