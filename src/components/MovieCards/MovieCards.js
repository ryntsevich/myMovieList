import React from 'react';
import MovieCard from '../MovieCards/MovieCard/MovieCard';
import { NavLink } from 'react-router-dom';
import './MovieCards.css';
import Spinner from '../Spinner/Spinner';

const MovieCards = (props) => {

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
                {pages.map((p, i) => {
                    return <NavLink to={`/movies?page=${i}`}
                        key={i}
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

