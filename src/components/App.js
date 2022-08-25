import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { data } from "../data";
import { addMovie } from "../actions";

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
    const { favorites } = this.props.store.getState();
    const index = favorites.indexOf(movie);
    console.log(index,"in");
    if (index !== -1){
      //found the movie
      console.log("if in",index)
      return true;
    }
    return false;
  };
  render() {
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
              isFav={this.isMovieFav(movie)}
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
              />
            ))}
          </div>
        </div>
        Project Setup
      </div>
    );
  }
}

export default App;
