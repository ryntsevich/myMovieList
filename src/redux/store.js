import { combineReducers } from 'redux';
import movieReducer from './reducers/movieR';

import moviesReducer from "./reducers/moviesR";

let combinedReducer = combineReducers({
    moviesR: moviesReducer,
    movieR: movieReducer// редьюсер moviesReducer отвечает за раздел state под именем movies
    // + другие редьюсеры
});

export default combinedReducer;
