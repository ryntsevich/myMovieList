import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.css';
import isoFetch from 'isomorphic-fetch';

class MovieInfo extends React.Component {

    componentDidMount() {
        this.getMovieById(this.props.match.params.movieId);
    }

    getMovieById = (id) => {
        isoFetch(`http://localhost:4000/data/?id=${id}`, {
            method: 'get'
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("fetch error " + response.status);
                else
                    return response.json();
            })
            .then(movie => {
                this.props.setMovie(movie);
            })
            .catch(error => {
                this.fetchError(error.message);
            })
            ;
    }

    fetchError = (errorMessage) => {
        console.error(showStr);
    };

    render() {

        if (!this.props.loading)
            return "загрузка данных...";

        let movieInfo = this.props.movie[0];

        const { title, genre, poster_big, tagline, year, overview } = movieInfo;


        return (
            <div className="movieInfo__container"
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
                    <div className="button__container">
                        <button className="btn">Going to</button>
                        <button className="btn">Watched</button>
                        <button className="btn">Favourite</button>
                    </div>
                </div>

            </div>
        );
    };
}

export default MovieInfo;
