import * as actionTypes from './actionTypes';

export const setMovieAC = (movie) => {
    return {
      type: actionTypes.MOVIE_SET,
      movie
    };
  };