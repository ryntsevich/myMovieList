import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { Movie as MoviePresentational } from '../../components/Movie/Movie';
import { movieThunkAC } from '../../redux/actions/movieAC';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
// import Spinner from '../../components/Spinner/Spinner';

class Movie extends Component {

    componentDidMount() {
        //     // Load movie's detail
        console.log(this.props)

        this.props.onFetchMovie(this.props.id);
    }

    //    componentDidMount() {
    //        console.log(this.props)
    //     this.props.dispatch(movieThunkAC(this.props.dispatch(this.props.id)));
    //   }

    render() {
        console.log(this.props.id)
        console.log(this.props)
        // set initial movie
        let movie = null;
        if (this.props.loading) {
            // show spinner if movie is being loaded
            movie = (
                <div style={{ paddingTop: '60px' }}>
                    top
                </div>
            );
        } else if (this.props.movie) {
            // show Movie component if movie is loaded
            movie = <MovieInfo movieInfo={this.props.movie} />;
        }
        return <div>{movie}</div>;
    }
}

// Movie.propTypes = {
//   movie: PropTypes.object,
//   loading: PropTypes.bool,
//   onFetchMovie: PropTypes.func,
// };

const mapStateToProps = state => {
    console.log(state)
    return {
        movie: state.movie.data,
        loading: state.movie.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovie: id => dispatch(movieThunkAC(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);
