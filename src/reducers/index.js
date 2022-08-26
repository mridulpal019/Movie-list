import { combineReducers } from "redux";
import {ADD_MOVIES ,ADD_FAVOURITE,REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITE} from "../actions/index"
const intitialMoviesState={
    list:[],
    favorites:[],
    showFavourites:false
}
export function movies (state=intitialMoviesState, action){
    console.log("moivereducer")

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

        case REMOVE_FROM_FAVOURITE:{
            const filteredArray=state.favorites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return {
                ...state,
                favorites:filteredArray
            }
        }
        case SET_SHOW_FAVOURITE:{
            return{
                ...state,
                showFavourites:action.value
            }
        }

        default :return state
    }

} 
const intitalSearchState={
    result:{}
}
export function search (state=intitalSearchState,action){
    console.log("search reducer");
     return state;
}

const initialRootState={
    movies:intitialMoviesState,
    search:intitalSearchState
}

export default function rootReducer(state=initialRootState,action){
    return{
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
}
