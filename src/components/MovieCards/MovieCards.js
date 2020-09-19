import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCards/MovieCard/MovieCard';
import isoFetch from 'isomorphic-fetch';
import { Link, NavLink } from 'react-router-dom';


import './MovieCards.css';
import Spinner from '../Spinner/Spinner';


let MovieCards = (props) => {

    // console.log(props)

    let cards = <Spinner />;

    if (props.movies) {
        cards = props.movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
        ));
    }

    let pagesCount = Math.ceil(props.totatMovieCount / props.pageSize);

    let pages = ["All", "1", "2", "3"];
    // for (let i = 0; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    let localPage = localStorage.getItem('currentPage');

    return (
        <div>
            <div className="pagination__container">
                {/* <NavLink to="/movies" className={localPage == 0 ? "selectedTab" : "tab"} onClick={() => props.cbGetMovies()}>All</NavLink> */}
                {pages.map((p, i) => {
                    return <NavLink to={`/movies?page=${i}`} 
                    // activeClassName="selectedTab"
                        key={i}
                        // className="tab"
                        className={(props.currentPage === i || localPage == p) ? "selectedTab" : "tab"}
                        onClick={() => { p === "All" ? props.cbGetMovies() : props.cbOnPageChanged(i) }}
                    >{p}</NavLink>
                })}

            </div>
            <div className="movieCards__container" >
                {cards}
            </div>
        </div>
    );
}

export default MovieCards;

