import React from 'react';
import { connect } from 'react-redux';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
// import { setMovieAC } from '../../redux/actions/movieAC';
import { setMoviesAC } from '../../redux/actions/moviesAC';
import Profile from '../../components/Profile/Profile'
import Collection from '../../components/Collection/Collection';


// const CollectionC = () => {
//     return (
//         <Profile />
//     )
// }


class CollectionC extends React.Component {
    render() {
        return (
            <Profile />
        );
    }
}

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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Collection);

// export default CollectionC;