import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCards/MovieCard/MovieCard';
import isoFetch from 'isomorphic-fetch';
import { Link, NavLink } from 'react-router-dom';


import './MovieCards.css';
import Spinner from '../Spinner/Spinner';

class MovieCardsAPIC extends React.Component {


    componentDidMount() {
        // console.log(this.props)
        // console.log(this.props.match.params.pageId)
        // console.log(this.props.movies.length === 0)
        // console.log(this.props.currentPage);
        let localPage = localStorage.getItem('currentPage');
        // console.log(this.state.currentP);
        localPage == 0 ? this.getMovies() : this.onPageChaged(localPage);

    }

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };

    getMovies = () => {
        localStorage.setItem('currentPage', 0);

        isoFetch(`http://localhost:4000/data`, {
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
        localStorage.setItem('currentPage', pageNumber);
        // console.log(this.props.currentPage)

        // console.log(pageNumber)
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

        console.log(this.props)

        let cards=<Spinner />;

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

        let localPage = localStorage.getItem('currentPage');


        return (
            <div>
                <div className="pagination__container">
                    <NavLink to="/movies" className={localPage == 0 ? "selectedTab" : "tab"} onClick={() => this.getMovies()}>All</NavLink>
                    {pages.map((p, i) => {
                        return <NavLink to={`/movies?page=${p}`} key={i} className={(this.props.currentPage === p || localPage == p) ? "selectedTab" : "tab"} onClick={() => { this.props.currentPage != p && this.onPageChaged(p) }}>{p}</NavLink>
                    })}

                </div>
                <div className="movieCards__container" >
                    {cards}
                </div>
            </div>
        );
    }
};

export default MovieCardsAPIC;

