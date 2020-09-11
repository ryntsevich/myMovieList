import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import MovieCard from '../MovieCards/MovieCard/MovieCard';
import './MovieCards.css';
import { Link } from 'react-router-dom';



const MovieCards = ({ movies }) => {
    let cards;

    if (movies) {
       cards = movies.map((m, i) => (
            <Link key={i} to={`${'/movie/:movieId'.replace(/\:movieId/, m.id)}`}>
                <MovieCard movie={m} />
            </Link>
        ));
    }

    return (
        <div className="movieCards__container">
            {cards}
        </div>
    );
};

MovieCards.propTypes = {
    movies: PropTypes.array
  };

export default MovieCards;
