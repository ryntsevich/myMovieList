import * as actionTypes from './actionTypes';

import isoFetch from 'isomorphic-fetch';

export const movieLoadingAC = () => {
    return {
        type: actionTypes.MOVIE_LOADING
    };
}

export const movieErrorAC = () => {
    return {
        type: actionTypes.MOVIE_ERROR
    };
}

export const movieSetAC = (movie) => {
    return {
        type: actionTypes.MOVIE_SET,
        movie: movie
    };
}

// export const fetchMovie = id => async dispatch => {
//     dispatch(fetchMovieStart());

//     try {
//       const data = await axios(MOVIE.replace(/\{movie_id\}/, id));

//       dispatch(fetchMovieSuccess(data.data));
//     } catch (error) {
//       dispatch(fetchMovieFail());
//     }
//   };

export const movieThunkAC = id => (dispatch) => {
    // Как и любой action creator, countriesThunkAC должен вернуть action,
    // только action будет не хэш, а ФУНКЦИЯ.
    // Все middleware стоят ДО редьюсеров, их задача - преобразовывать или фильтровать action-ы.
    // Конкретно middleware "thunk", если обнаруживает что action - функция а не хэш, 
    // ВЫПОЛНЯЕТ эту функцию и не пропускает её дальше, к редьюсерам.
    return () => {
        dispatch(movieLoadingAC());
        const dataId = '/movie/{movie_id}'.replace(/\{movie_id\}/, id);
        isoFetch("http://localhost:4000/data/:id")
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
                dispatch(movieSetAC(data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(movieErrorAC());
            })
            ;
    }

}
