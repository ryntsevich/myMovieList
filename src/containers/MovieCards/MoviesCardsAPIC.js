import React from 'react';
import PropTypes from 'prop-types';
// import MovieCard from '../MovieCards/MovieCard/MovieCard';
import isoFetch from 'isomorphic-fetch';
import { Link, NavLink } from 'react-router-dom';


// import Spinner from '../Spinner/Spinner';
import MovieCards from '../../components/MovieCards/MovieCards';

class MovieCardsAPIC extends React.Component {


    componentDidMount() {
        // console.log(this.props)
        // console.log(this.props.match.params.pageId)
        // console.log(this.props.movies.length === 0)
        // console.log(this.props.currentPage);
        let localPage = localStorage.getItem('currentPage');
        // console.log(this.state.currentP);
        localPage == 0 ? this.getMovies() : this.onPageChanged(localPage);
        // this.getMovies()

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

    onPageChanged = (pageNumber) => {
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

        return (

            <MovieCards
                movies={this.props.movies}
                totatMovieCount={this.props.totatMovieCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                cbOnPageChanged={this.onPageChanged}
                cbGetMovies={this.getMovies} />
        );
    }
};

export default MovieCardsAPIC;

