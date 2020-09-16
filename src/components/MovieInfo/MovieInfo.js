import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.css';

export const MovieInfo = ({ movieInfo }) => {
    console.log(movieInfo)

    const { title, genre, poster_big, tagline, year, overview } = movieInfo;

    return (
        <div
            className="movieInfo__container"
        //   style={{
        //     backgroundImage: `url(${BASE_IMAGE_URL}/w1280/${movie.backdrop_path})`,
        //   }}
        >
            <div className="movieInfo__poster">
                <img src={poster_big} alt="" />
            </div>
            <div className="movieInfo__details">
                <h1 className="title">{title}</h1>
                <p className="tagline">{tagline}</p>
                <p className="genre">{genre}</p>
                <p className="year">{year}</p>
                <p className="overview">{overview}</p>
            </div>
        </div>
    );
};

MovieInfo.propTypes = {
    movieInfo: PropTypes.object
};

export default MovieInfo;
