import {ADD_MOVIES ,ADD_FAVOURITE} from "../actions/index"
const intitialMoviesState={
    list:[],
    favorites:[]
}
export default function movies (state=intitialMoviesState, action){

    switch(action.type){
        case ADD_MOVIES:return {
          ...state,
          list: action.movies,
        };
         
        case ADD_FAVOURITE:
            return {
              ...state,
              favorites: [action.movie, ...state.favorites],
            };

        default :return state
    }

} 

