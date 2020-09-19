import React from 'react';
import { connect } from 'react-redux';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
// import { setMovieAC } from '../../redux/actions/movieAC';
import { setMoviesAC, setCurrentTitleAC } from '../../redux/actions/moviesAC';
import Profile from '../../components/Profile/Profile'
import Collection from '../../components/Collection/Collection';


// const CollectionC = () => {
//     return (
//         <Profile />
//     )
// }


// class CollectionC extends React.Component {
//     render() {
//         return (
//             <Profile />
//         );
//     }
// }

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
export default connect(mapStateToProps, mapDispatchToProps)(Collection);

// export default CollectionC;