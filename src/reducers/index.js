import {ADD_MOVIES ,ADD_FAVOURITE,REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITE} from "../actions/index"
const intitialMoviesState={
    list:[],
    favorites:[],
    showFavourites:false
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

