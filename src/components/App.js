import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { data } from "../data";
import { addMovie, setShowFavourite } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // console.log("updated")
      this.forceUpdate();
    });
    //make api call

    //dispatch action
    store.dispatch(addMovie(data));
    console.log("state",this.props.store.getState())
  }
  isMovieFav = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favorites.indexOf(movie);
    // console.log(index,"in");
    if (index !== -1){
      //found the movie
      // console.log("if in",index)
      return true;
    }
    return false;
  };

  onChangeTab=(value)=>{
    this.props.store.dispatch(setShowFavourite(value))
  }
  render() {
    const { movies } = this.props.store.getState();
    const { list, favorites, showFavourites } = movies;
    
    const displayMovies=showFavourites ? favorites : list
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${!showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                isFav={this.isMovieFav(movie)}
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies to Display!!!</div>:''}
        </div>
      </div>
    );
  }
}

export default App;
