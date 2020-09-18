import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.css';
import isoFetch from 'isomorphic-fetch';

class MovieInfo extends React.Component {


    state = {
        isFavourite: false
    }

    componentDidMount() {
        // console.log(this.props)
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
        console.error(errorMessage);
    }

    changePropFavourite = (movieInfo) => {

        movieInfo.isFavourite ? movieInfo.isFavourite = false : movieInfo.isFavourite = true;
        this.updateMovie(this.props.match.params.movieId, movieInfo);
    }

    changePropFuture = (movieInfo) => {
        movieInfo.isFuture ? movieInfo.isFuture = false : movieInfo.isFuture = true;

        // (movieInfo.isPast ? movieInfo.isPast = false : movieInfo.isPast = true) || (movieInfo.isFuture ? movieInfo.isFuture = false : movieInfo.isFuture = true)

        this.updateMovie(this.props.match.params.movieId, movieInfo);
    }

    changePropPast = (movieInfo) => {
        movieInfo.isPast ? movieInfo.isPast = false : movieInfo.isPast = true;
        this.updateMovie(this.props.match.params.movieId, movieInfo);
    }

    updateMovie = (id, movieInfo) => {
        let newMovieInfo = JSON.stringify(movieInfo)

        isoFetch(`http://localhost:4000/data/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: newMovieInfo,
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("fetch error " + response.status);
                else
                    return response;
            })
            .then(movie => {
                this.getMovieById(this.props.match.params.movieId);
                console.log(movieInfo)
            })
            .catch(error => {
                this.fetchError(error.message);
            })
            ;
    }

    render() {

        if (!this.props.loading)
            return "загрузка данных...";

        let movieInfo = this.props.movie[0];

        const { title, genre, poster_big, tagline, year, overview, isFavourite, isFuture, isPast } = movieInfo;

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
                        <input value={isFuture ? "Not going to" : "Going to"} type="button" className={isFuture ? "selected btn" : "btn"} disabled={isPast || false} onClick={() => this.changePropFuture(movieInfo)}></input>
                        <input value={isPast ? "Didn't watch" : "Watched"} type="button" className={isPast ? "selected btn" : "btn"} disabled={isFuture || false} onClick={() => this.changePropPast(movieInfo)}></input>
                        <input value={isFavourite ? "Not Favourite" : "Favourite"} type="button" className={isFavourite ? "selected btn" : "btn"} onClick={() => this.changePropFavourite(movieInfo)}></input>
                    </div>
                </div>

            </div>
        );
    };
}

export default MovieInfo;
