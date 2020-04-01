import React from "react";
import axios from "axios";

class App extends React.Component {
  
  state = {
    isLoading: true,
    movies: []
  };

  // async await
  // : javascript에게 getMovies function은 시간이 필요하니 기다려야 한다고 말하는 문법이다. 
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){

    this.getMovies();
    
  }

  render() {
    const { isLoading } = this.state;
    return <div>{ isLoading ? "Loading..." : "we are ready"}</div>;
    
  }  
}

export default App;
