import { handleMovieSearch, addToMovieList } from "../actions";
import React from "react";


class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state={
     
      searchText:''
    }
  }
  handleChange=(e)=>{
    this.setState({
        searchText:e.target.value
    });

  };

  handleAddToMovies=(movie)=>{
    this.props.dispatch(addToMovieList(movie));

    this.setState({
      showSearchResults:false
    });
  }
  handleSearch = () => {
    const {searchText}=this.state;

    this.props.dispatch(handleMovieSearch(searchText))

  };

  render() {
    const {result, showSearchResults} =this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {showSearchResults &&  <div className="search-results">
            <div className="search-result">
              <img src={result.Poster} alt ="search-pic"/>
              <div className="movie-info">
                <span> {result.Title}</span>
                <button onClick={()=>{this.handleAddToMovies(result)}}>Add to Movies</button>
              </div>
            </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Navbar;
