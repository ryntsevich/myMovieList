import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = props => {
    const { title, genre, poster, id } = props.movie;

    return (
        <Link to={`${'/movie/:movieId'.replace(/\:movieId/, id)}`} >
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
        </Link >

    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default MovieCard;

