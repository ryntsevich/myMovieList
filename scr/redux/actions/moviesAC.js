import * as actionTypes from './actionTypes';

import isoFetch from 'isomorphic-fetch';

export const moviesLoadingAC = () => {
  return {
    type: actionTypes.MOVIES_LOADING
  };
}

export const moviesErrorAC = () => {
  return {
    type: actionTypes.MOVIES_ERROR
  };
}

export const moviesSetAC = (movies) => {
  return {
    type: actionTypes.MOVIES_SET,
    movies: movies
  };
}

export const moviesThunkAC = (dispatch) => {
  // Как и любой action creator, countriesThunkAC должен вернуть action,
  // только action будет не хэш, а ФУНКЦИЯ.
  // Все middleware стоят ДО редьюсеров, их задача - преобразовывать или фильтровать action-ы.
  // Конкретно middleware "thunk", если обнаруживает что action - функция а не хэш, 
  // ВЫПОЛНЯЕТ эту функцию и не пропускает её дальше, к редьюсерам.
  return () => {
    dispatch(moviesLoadingAC());
    isoFetch("http://localhost:4000/data")
      .then((response) => { // response - HTTP-ответ
        if (!response.ok) {
          let Err = new Error("fetch error " + response.status);
          Err.userMessage = "Ошибка связи";
          throw Err;
        }
        else
          return response.json();
      })
      .then((data) => {
        dispatch(moviesSetAC(data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(moviesErrorAC());
      })
      ;
  }

}
