import React from 'react';
import isoFetch from 'isomorphic-fetch';
import MovieCards from '../../components/MovieCards/MovieCards';

class MovieCardsAPIC extends React.Component {

    componentDidMount() {
        let localPage = localStorage.getItem('currentPage');
        localPage == 0 ? this.getMovies() : this.onPageChanged(localPage);
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

