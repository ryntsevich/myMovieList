import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCards/MovieCard/MovieCard';
import isoFetch from 'isomorphic-fetch';

import './MovieCards.css';

class MovieCards extends React.Component {

    componentDidMount() {
        this.getMovies();
    }

    fetchError = (errorMessage) => {
        console.error(showStr);
    };

    getMovies = () => {

        isoFetch(`http://localhost:4000/data`, {
            method: 'get'
        })
            .then(response => { // response - HTTP-ответ
                if (!response.ok)
                    throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
                else
                    return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
            })
            .then(movies => {
                // console.log(movies)
                this.props.setMovies(movies);
                // this.fetchSuccess(movies); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
            })
            .catch(error => {
                this.fetchError(error.message);
            })
            ;
    };
    render() {
        let cards;

        if (this.props.movies) {
            cards = this.props.movies.map((m) => (
                <MovieCard movie={m} key={m.id} />
            ));
        }

        return (
            <div className="movieCards__container" >
                {cards} 
            </div>
        );
    }
};

export default MovieCards;

