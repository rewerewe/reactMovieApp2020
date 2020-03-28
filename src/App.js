import React from 'react';

function Food(props) {
  console.log(props);
  return <h1>I like Yogurt</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="kimchi" name="food" />
    </div>
  ); 
   
}

export default App;
