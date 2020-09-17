import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCards/MovieCard/MovieCard';
import isoFetch from 'isomorphic-fetch';

import './MovieCards.css';

class MovieCards extends React.Component {

    componentDidMount() {
        console.log(this.props.match)
        this.getMovies();
    }

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };

    getMovies = () => {
        isoFetch(`http://localhost:4000/data?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`, {
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
            })
            .catch(error => {
                this.fetchError(error.message);
            })
            ;
    }

    onPageChaged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        isoFetch(`http://localhost:4000/data?_limit=${this.props.pageSize}&_page=${pageNumber}`, {
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
            })
            .catch(error => {
                this.fetchError(error.message);
            })
            ;
    }

    render() {
        let cards;

        if (this.props.movies) {
            cards = this.props.movies.map((m) => (
                <MovieCard movie={m} key={m.id} />
            ));
        }

        let pagesCount = Math.ceil(this.props.totatMovieCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className="pagination__container">
                    {pages.map((p,i) => {
                        return <div key={i} className={this.props.currentPage === p ? "selectedTab" : "tab"} onClick={() => { this.props.currentPage != p && this.onPageChaged(p) }}>{p}</div>
                    })}
                </div>
                <div className="movieCards__container" >
                    {cards}
                </div>
            </div>
        );
    }
};

export default MovieCards;

