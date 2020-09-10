import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.css';

const MovieCard = props => {
    const { title, genre, poster } = props.movie;

    return (
        <div className="movieCard__container"
            style={{ backgroundImage: `url(${poster})` }}
        >

            <div className="movieCard__bottom">
                <h3 className="movieCard__title">{title}</h3>
                <p className="movieCard__genre">
                    {genre}
                </p>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCard;

