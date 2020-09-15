import { combineReducers } from 'redux';

import moviesReducer from "./reducers/moviesR";

let combinedReducer=combineReducers({
    movies: moviesReducer // редьюсер moviesReducer отвечает за раздел state под именем movies
    // + другие редьюсеры
});

export default combinedReducer;
