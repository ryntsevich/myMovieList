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

    render() {

        return (
            <div className="">
                <Search />
                <MovieCardsC />
            </div>
        );
    }
}
export default MainPage;

