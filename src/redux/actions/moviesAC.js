import * as actionTypes from './actionTypes';

export const setMoviesAC = (movies) => {
  return {
    type: actionTypes.MOVIES_SET,
    movies
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: actionTypes.SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

export const setCurrentTitleAC = (title) => {
  return {
    type: actionTypes.SET_TITLE,
    title: title
  };
};

export const searchAC = (str) => {
  return {
    type: 'SEARCH',
    payload: str
  }
};

export const searchMoviesAC = (str) => {
  return {
    type: 'CHANGE_MOVIES_SEARCH',
    str
  }
};
