import React from 'react';
import { connect } from 'react-redux';
import { setMoviesAC, setCurrentTitleAC } from '../../redux/actions/moviesAC';
import Button from '../../components/Button/Button'


const mapStateToProps = (state) => {

    return {
        movies: state.moviesR.movies,
        pageSize: state.moviesR.pageSize,
        totatMovieCount: state.moviesR.totalMovieCount,
        currentPage: state.moviesR.currentPage,
        title: state.moviesR.title
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (movies) => {
            dispatch(setMoviesAC(movies));
        },
        setCurrentTitle: (title) => {
            dispatch(setCurrentTitleAC(title));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Button);