import * as actionTypes from '../actions/actionTypes';


const initState = {
  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  movies: [],
  // filtredMovies: movies,
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
      // let copy = 
      return { ...state, search: action.payload }
    }
    case actionTypes.CHANGE_MOVIES_SEARCH: {
      return { ...state, movies: state.movies.filter(m => (m.title.toLowerCase()).includes(state.search.toLowerCase())) }
    }
    //     case actionTypes.CHANGE_ISFAVOURITE: {
    // return {
    //   ...state,
    //   state.movies.m
    //   for (let i=0; i<receipts.length; i++) {
    //     if ((receipts[i].id) == receiptId) {
    //         if (receipts[i].isSelected){
    //         receipts[i].isSelected = !receipts[i].isSelected;
    //     } else {
    //         receipts[i].isSelected = true;
    //     }
    //     }
    // }

    // }
    //     }
    // movie: [...state.movie.find(m => m.isFavourite)]
    // case actionTypes.SEARCH_MOVIES: {
    //   const { payload } = action
    //   console.log(state)
    //   const filtredMovies = _.filter(state.movies, (o) => _.toLower(o.title).includes(_.toLower(payload)))
    //   return { ...state, filtredMovies }
    // }
    default:
      return state;
  }
}

export default moviesReducer;
