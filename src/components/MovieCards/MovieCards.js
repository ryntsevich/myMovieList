import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCards/MovieCard/MovieCard';
import './MovieCards.css';

const MovieCards = ({ movies }) => {
    let cards;

    if (movies) {
        cards = movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
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
