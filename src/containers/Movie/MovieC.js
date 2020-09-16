import React from 'react';
import { connect } from 'react-redux';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { setMovieAC } from '../../redux/actions/movieAC';


const mapStateToProps = (state) => {
    return {
        movie: state.movieR.movie,
        loading: state.movieR.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovie: (movie) => {
            dispatch(setMovieAC(movie));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);