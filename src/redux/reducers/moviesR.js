import * as actionTypes from '../actions/actionTypes';


const initState = {
  movies: [],
  pageSize: 4,
  totalMovieCount: 12,
  currentPage: 0,
  title: null,
  search: ''
}

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.MOVIES_SET: {
      return { ...state, movies: action.movies }
    }
    case actionTypes.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case actionTypes.SET_TITLE: {
      return { ...state, title: action.title }
    }
    case actionTypes.SEARCH: {
      return { ...state, search: action.payload }
    }
    case actionTypes.CHANGE_MOVIES_SEARCH: {
      return { ...state, movies: state.movies.filter(m => (m.title.toLowerCase()).includes(state.search.toLowerCase())) }
    }
    default:
      return state;
  }
}

export default moviesReducer;
