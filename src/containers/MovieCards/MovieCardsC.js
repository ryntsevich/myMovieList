import React from 'react';
import { connect } from 'react-redux';
import MovieCards from '../../components/MovieCards/MovieCards';
import { setMoviesAC, setCurrentPageAC} from '../../redux/actions/moviesAC';

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

export default connect(mapStateToProps, mapDispatchToProps)(MovieCards);