import React from 'react';
import MovieCardsC from '../../containers/MovieCards/MovieCardsC';
import isoFetch from 'isomorphic-fetch';
import MovieCard from '../MovieCards/MovieCard/MovieCard'

import './Collection.css';



class Buttons extends React.Component {


    render() {

        let cards;

        if (this.props.movies) {
            cards = this.props.movies.map((m) => (
                <MovieCard movie={m} key={m.id} />
            ));
        }

        return (
            <div className="buttonsCollection__container">
                <button className="btn" onClick={() => this.getMoviesCollection("isFuture")}>Going to</button>
                <button className="btn" onClick={() => this.getMoviesCollection("isPast")}>Watched</button>
                <button className="btn" onClick={() => this.getMoviesCollection("isFavourite")}>Favourite</button>
            </div>

        );


    }

}

export default Buttons;