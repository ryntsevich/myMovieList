import React from 'react';
import { connect } from 'react-redux';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { setMovieAC } from '../../redux/actions/movieAC';
import Profile from '../../components/Profile/Profile'


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


// const mapStateToProps = (state) => {
//     return {
//         movie: state.movieR.movie,
//         loading: state.movieR.loading
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setMovie: (movie) => {
//             dispatch(setMovieAC(movie));
//         }
//     }
// }
// connect(mapStateToProps, mapDispatchToProps)

export default CollectionC;