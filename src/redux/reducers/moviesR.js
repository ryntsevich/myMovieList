import * as actionTypes from '../actions/actionTypes';


const initState = {
  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  movies: [],
  pageSize: 4,
  totalMovieCount: 12,
  currentPage: null,


}

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.MOVIES_SET: {
      return { ...state, movies: action.movies }
    }
    case actionTypes.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    default:
      return state;
  }
}

export default moviesReducer;
