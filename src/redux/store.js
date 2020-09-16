import { combineReducers } from 'redux';
import movieReducer from './reducers/movieR';

import moviesReducer from "./reducers/moviesR";
import searchReducer from './reducers/searchR';

let combinedReducer=combineReducers({
    moviesR: moviesReducer,
    search: searchReducer,
    movie: movieReducer // редьюсер moviesReducer отвечает за раздел state под именем movies
    // + другие редьюсеры
});

export default combinedReducer;
