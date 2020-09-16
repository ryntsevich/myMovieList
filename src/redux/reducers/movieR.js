import * as actionTypes from '../actions/actionTypes';


const initState = {

    loading: false, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
    data: null

}

function movieReducer(state = initState, action) {
    switch (action.type) {

        case actionTypes.MOVIE_LOADING: {
            let newState = {
                loading: true,
                data: null,
            };
            return newState;
        }

        case actionTypes.MOVIE_ERROR: {
            let newState = {
                loading: false,
                data: null,
            };
            
            return newState;
        }

        case actionTypes.MOVIE_SET: {
            let newState = {
                loading: false,
                data: action.movie,
            };
            return newState;
        }

        default:
            return state;
    }
}

export default movieReducer;
