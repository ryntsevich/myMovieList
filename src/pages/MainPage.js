import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isoFetch from 'isomorphic-fetch';


import { moviesThunkAC } from "../redux/actions/moviesAC";

// import MovieCards from '../components/MovieCards/MovieCards';

import Search from '../containers/Search/Search';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import MoviePage from './MoviePage';
import MovieCardsC from '../containers/MovieCards/MovieCardsC';

class MainPage extends React.Component {

    // static propTypes = {
    //     movies: PropTypes.object.isRequired
    // };

    // state = {
    //     movies: this.props.movies
    // };


    // componentDidMount() {
    //     this.props.dispatch(moviesThunkAC(this.props.dispatch));
    // }

    // componentDidMount() {
    //     this.loadMovies();
    //   }

    //   state = {
    //     movies: null,
    //     loading: false
    //   };

    //   fetchError = (errorMessage) => {
    //     console.error(showStr);
    //   };

    //   fetchSuccess = (loadedMovies) => {
    //     console.log(loadedMovies);
    //     this.setState({
    //       movies: loadedMovies,
    //       loading: true
    //     });
    //   };

    //   loadMovies = () => {

    //     isoFetch(`http://localhost:4000/data?_limit=5&_page=2`, {
    //       method: 'get',
    //       headers: {
    //         "Accept": "application/json"
    //       }
    //     })
    //       .then(response => { // response - HTTP-ответ
    //         if (!response.ok)
    //           throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
    //         else
    //           return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
    //       })
    //       .then(movies => {
    //         this.fetchSuccess(movies); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
    //       })
    //       .catch(error => {
    //         this.fetchError(error.message);
    //       })
    //       ;

    //   };

    render() {
        // if (this.props.movies.status <= 1)
        //     return "загрузка...";

        // if (this.props.movies.status === 2)
        //     return "ошибка загрузки данных";

        // console.log(this.props.totatMovieCount)

        // let pagesCount = Math.ceil( this.props.totatMovieCount / this.props.pageSize);
        // console.log(pagesCount);

        // let pages = [];
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i);
        // }
        // console.log(this.state.movies)

        return (
            <div className="">
                {/* <div>
                    <div className="searchBar-module__container">
                        searchBar
                    </div>
                </div> */}
                <Search />
                {/* <div>
                    {pages.map(p => {
                        return <span>{p}</span>
                    })}
                </div> */}
                <div>
                    {/* <MovieCards movies={this.state.movies} /> */}
                    <MovieCardsC />
                </div>
            </div>
        );

    }

}
// const mapStateToProps = function (state) {
//     // console.log(state.movies)

//     return {
//         movies: state.movies,
//         pageSize: state.movies.pageSize,
//         totatMovieCount: state.movies.totalMovieCount,
//         currenPage: state.movies.currenPage
//     };
// };

// console.log(this.state.movies)
// export default connect(mapStateToProps)(MainPage);
export default MainPage;

