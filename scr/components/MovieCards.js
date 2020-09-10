import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';


class MovieCards extends React.PureComponent {

    static propTypes = {
        movies: PropTypes.array.isRequired
    };

    render() {

        return (

            <div> СПисочеккккк
                <div>
                    {this.props.movies.map(movie => <p>{movie.poster}</p>)}
                </div>
            </div>
        );
    }

}

export default MovieCards;
