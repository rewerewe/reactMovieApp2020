import React from "react";

function Food({ fav }) {
  return <h1>I like { fav }</h1>;
}
function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="kimchi" />
      <Food fav="coffee" />
      <Food fav="fish" />
      <Food fav="water" />
      <Food fav="kkokkalcon" />
    </div>
  ); 
   
}

export default App;
