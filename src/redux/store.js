import { combineReducers } from 'redux';
import movieReducer from './reducers/movieR';

import moviesReducer from "./reducers/moviesR";

let combinedReducer = combineReducers({
    moviesR: moviesReducer,
    movieR: movieReducer
});

export default combinedReducer;
