import React from 'react';
import { connect } from 'react-redux';
import MovieCardsAPIC from '../MovieCards/MoviesCardsAPIC';
import { setMoviesAC, setCurrentPageAC} from '../../redux/actions/moviesAC';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {

    return {
        movies: state.moviesR.movies,
        pageSize: state.moviesR.pageSize,
        totatMovieCount: state.moviesR.totalMovieCount,
        currentPage: state.moviesR.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (movies) => {
            dispatch(setMoviesAC(movies));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCardsAPIC));