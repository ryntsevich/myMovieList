import * as actionTypes from '../actions/actionTypes';


const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function moviesReducer(state=initState,action) {
  switch (action.type) {

    case actionTypes.MOVIES_LOADING: {
      let newState={
        status:1,
        data:null,
      };
      return newState;
    }

    case actionTypes.MOVIES_ERROR: {
      let newState={
        status:2,
        data:null,
      };
      return newState;
    }

    case actionTypes.MOVIES_SET: {
      let newState={
        status:3,
        data:action.movies,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default moviesReducer;
