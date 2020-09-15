import React from 'react';
import { connect } from 'react-redux';

import MovieInfo from '../components/MovieInfo/MovieInfo';
import { moviesThunkAC } from "../redux/actions/moviesAC";


class MoviePage extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch(moviesThunkAC(this.props.dispatch));
  }

  render() {

    if (this.props.movies.status <= 1)
    return "загрузка...";

    if (this.props.movies.status === 2)
      return "ошибка загрузки данных";

    let movieId = parseInt(this.props.match.params.movieId);
    // console.log(this.props.match.params.movieId);

    let movieInfo = this.props.movies.data.find(movie => movie.id == movieId);
    // console.log(movieInfo)

    return (
      <MovieInfo movieInfo = {movieInfo} />
    );

  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
export default connect(mapStateToProps)(MoviePage);

