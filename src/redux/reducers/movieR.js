import * as actionTypes from '../actions/actionTypes';


const initState = {
    loading: false, 
    movie: []
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.MOVIE_SET: {
            return { ...state, movie: action.movie, loading: true }
        }
        default:
            return state;
    }
}

export default movieReducer;
