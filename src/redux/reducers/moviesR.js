import * as actionTypes from '../actions/actionTypes';


const initState = {
  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  movies: [],
  pageSize: 4,
  totalMovieCount: 12,
  currentPage: 1

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
// // export default function reducer(state = initialState, action) {
// //   switch(action.type) {
// //     case actionTypes.SEARCH: {
// //       const {query} = action;
// //       const updetedList = state.data.filter((val) => val.includes(query));
// //       return {...state, query, updetedList};
// //     }
// //     default:
// //       return state;
// //   }
// // }

// function moviesReducer(state = initState, action) {
//   switch (action.type) {

//     case actionTypes.MOVIES_LOADING: {
//       let newState = {
//         status: 1,
//         data: null,
//       };
//       return newState;
//     }

//     case actionTypes.MOVIES_ERROR: {
//       let newState = {
//         status: 2,
//         data: null,
//       };
//       return newState;
//     }

//     case actionTypes.MOVIES_SET: {
//       let newState = { ...initState };
//       newState.status = 3;
//       newState.data = action.movies;
//       return newState;
//     }
//     // }

//     // console.log('state до обработки редьюсером:',state);
//     //   let newState={...state};
//     //   newState.cnt++;
//     //   console.log('state после обработки редьюсером:',newState);
//     //   return newState;

//     //   case actionTypes.SEARCH: {
//     //   // const {query} = action;
//     //   // const updetedList = state.data.filter((val) => val.includes(query));
//     //   // return {...state, query, updetedList};

//     //   let newState = {
//     //     status: 4,

//     //   }
//     // }

//     default:
//       return state;
//   }
// }

export default moviesReducer;
