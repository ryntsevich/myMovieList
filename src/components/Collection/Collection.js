import React from 'react';
import MovieCardsC from '../../containers/MovieCards/MovieCardsC';
import isoFetch from 'isomorphic-fetch';
import MovieCard from '../MovieCards/MovieCard/MovieCard'

import './Collection.css';



class Collection extends React.Component {

    componentDidMount() {

        this.getMoviesCollection('isFavourite');

    }


    getMoviesCollection = (status) => {

        isoFetch(`http://localhost:4000/data?${status}=true`, {
            method: 'get'
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("fetch error " + response.status);
                else
                    return response.json();

            })
            .then(movies => {
                this.props.setMovies(movies);
                // console.log(movies)
            })
            .catch(error => {
                this.fetchError(error.message);
            })
            ;

    }
    fetchError = (errorMessage) => {
        console.error(errorMessage);
    }

    render() {

        let cards;

        if (this.props.movies) {
            cards = this.props.movies.map((m) => (
                <MovieCard movie={m} key={m.id} />
            ));
        }

        return (
            <div>
                <div className="buttonsCollection__container">
                    <button className="btn" onClick={() => this.getMoviesCollection("isFuture")}>Going to</button>
                    <button className="btn" onClick={() => this.getMoviesCollection("isPast")}>Watched</button>
                    <button className="btn" onClick={() => this.getMoviesCollection("isFavourite")}>Favourite</button>
                </div>

                <div className="collection__container">
                    {cards}

                </div>
                {/* <MovieCardsC /> */}
            </div>

        );


    }

}

export default Collection;