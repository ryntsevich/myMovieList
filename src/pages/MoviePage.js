import React from 'react';
// import { connect } from 'react-redux';
import isoFetch from 'isomorphic-fetch';


import MovieInfo from '../components/MovieInfo/MovieInfo';
// import Movie from '../containers/Movie/Movie';
// import { moviesThunkAC } from "../redux/actions/moviesAC";


class MoviePage extends React.Component {

  componentDidMount() {
    this.loadMovieById();
  }

  state = {
    movie: null,
    loading: false
  };

  fetchError = (errorMessage) => {
    console.error(showStr);
  };

  fetchSuccess = (loadedMovie) => {
    console.log(loadedMovie);
    this.setState({
      movie: loadedMovie[0],
      loading: true
    });
  };

  loadMovieById = () => {

    isoFetch(`http://localhost:4000/data/?id=${this.props.match.params.movieId}`, {
      method: 'get',
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => { // response - HTTP-ответ
        if (!response.ok)
          throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
        else
          return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
      })
      .then(movie => {
        this.fetchSuccess(movie); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
      })
      .catch(error => {
        this.fetchError(error.message);
      })
      ;

  };

  render() {

    if (!this.state.loading)
      return "загрузка данных...";

    // if (this.props.movies.status === 2)
    //   return "ошибка загрузки данных";

    let movieId = parseInt(this.props.match.params.movieId);
    // console.log(this.props.match.params.movieId);

    // let movieInfo = this.props.movies.data.find(movie => movie.id == movieId);
    // console.log(this.state)

    return (
      <MovieInfo movieInfo={this.state.movie} />
      // <div>ghdfs</div>
    );

  }
}

// const mapStateToProps = state => {
//   return {
//     movies: state.movies
//   };
// };
// export default connect(mapStateToProps)(MoviePage);
export default MoviePage;

