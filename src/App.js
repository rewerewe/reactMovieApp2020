import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  // async await
  // : javascript에게 getMovies function은 시간이 필요하며 기다려야 한다고 말하는 문법이다. 
  getMovies = async () => {

    // movies.data.data.movies
    // ECMA ES6는 { data: {data: {movies} } }로 사용할 수 있다. 
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    this.setState({ movies, isLoading: false });

    console.log(movies);
  }
  componentDidMount() {

    this.getMovies();

  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="contaider">
        {isLoading ? ( 
        <div class="loader">
          <span class="loader__text">"Loading..."</span>
        </div> 
        ) : (
        <div class="movies">
          { movies.map(movie => (
            <Movie 
            key={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            />
          ))}
        </div> 
        )}
      </section>
    );
  }
}

export default App;
