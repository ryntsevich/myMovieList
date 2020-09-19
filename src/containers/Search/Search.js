import React from 'react';
import { connect } from 'react-redux';
import { searchAC, setMoviesAC, searchMoviesAC } from '../../redux/actions/moviesAC';
import SearchBar from '../../components/Search/SearchBar';


const mapStateToProps = (state) => {
    return {
        movies: state.moviesR.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (movies) => {
            dispatch(setMoviesAC(movies));
        },
        search: (str) => {
            dispatch(searchAC(str));
        },
        searchMovies: (str) => {
            dispatch(searchMoviesAC(str));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);