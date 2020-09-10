import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import MovieCard from '../MovieCards/MovieCard/MovieCard';


class MovieCards extends React.PureComponent {

    static propTypes = {
        movies: PropTypes.array.isRequired
    };


    render() {


        return (

            <div> СПисочеккккк
                <div>
                    {this.props.movies.map((movie,i) => <MovieCard movie={movie} />)}
                </div>
            </div>
        );
    }

}

export default MovieCards;
