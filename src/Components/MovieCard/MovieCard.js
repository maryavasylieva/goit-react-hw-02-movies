import React from 'react';

import PropTypes from 'prop-types';
import styles from '../Movie.module.css';

const MovieCard = ({ title, posterUrl, overview, alt }) => (
  <div className={styles.movieCard}>
    <img src={posterUrl} alt={alt} />
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descr}>{overview}</p>
    </div>
  </div>
);

MovieCard.defaultProps = {
  alt: 'cool movies',
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  overview: PropTypes.string.isRequired,
};
export default MovieCard;
