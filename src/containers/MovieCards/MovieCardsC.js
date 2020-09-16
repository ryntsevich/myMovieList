import React from 'react';
import { connect } from 'react-redux';
import MovieCards from '../../components/MovieCards/MovieCards';
import { setMoviesAC } from '../../redux/actions/moviesAC';

const mapStateToProps = (state) => {

    return {
        movies: state.moviesR.movies,
        // pageSize: state.movies.pageSize,
        // totatMovieCount: state.movies.totalMovieCount,
        // currenPage: state.movies.currenPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (movies) => {
            dispatch(setMoviesAC(movies));
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCards);