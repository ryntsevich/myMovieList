import React from 'react';
import { connect } from 'react-redux';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { setMovieAC} from '../../redux/actions/movieAC';
// import { changeFavouriteAC } from '../../redux/actions/moviesAC';


const mapStateToProps = (state) => {
    // console.log(state.movieR.movie)
    return {
        movie: state.movieR.movie,
        loading: state.movieR.loading,
        isFavourite: state.movieR.isFavourite
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