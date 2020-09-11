import React from 'react';
import { connect } from 'react-redux';

import MovieInfo from '../components/MovieInfo/MovieInfo';

class MoviePage extends React.PureComponent {

  render() {

    let movieId = parseInt(this.props.match.params.movieId);
    console.log(movieId);

    let movieInfo = this.props.movies.find(movie => movie.id == movieId);
    console.log(movieInfo)

    return (
      <MovieInfo movieInfo={movieInfo} />
    );

  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.data
  };
};
export default connect(mapStateToProps)(MoviePage);


