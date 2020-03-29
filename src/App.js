import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <img src={ picture } alt={name}/>
    </div>
  );
}

const foodIlike = [
  {
    id: 1,
    name: "Coffee",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bmj.com%2Fsites%2Fdefault%2Ffiles%2Fsites%2Fdefautl%2Ffiles%2Fattachments%2Fbmj-article%2F2017%2F11%2Fcoffee_heart2_0.jpg&f=1&nofb=1"
  },
  {
    id: 2,
    name: "Yogurt",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.skinnytaste.com%2Fwp-content%2Fuploads%2F2011%2F07%2Flow-fat-frozen-yogurt-550x411.jpg&f=1&nofb=1" 
  },
  {
    id: 3,
    name: "Salmon",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftherawexplorerdotcom.files.wordpress.com%2F2013%2F11%2Fsalmon-sushi.jpg&f=1&nofb=1"
  },
  {
    id: 4,
    name: "Dduckbbonkkki",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F_fmoit9SU0u0%2FSeUAZgCGIsI%2FAAAAAAAAA-A%2Frnw0Y4aOxFE%2Fs320%2Fddukbokki.jpg&f=1&nofb=1"
  },
  {
    id: 5,
    name: "Sandwich",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcookieandkate.com%2Fimages%2F2015%2F03%2Fgreen-goddess-hummus-sandwich.jpg&f=1&nofb=1" 
  },
]
function App() {
  return (
    <div>
        { foodIlike.map (dish => <Food key={dish.id} name={dish.name} picture={dish.image} />
        )}
    </div>
  ); 
   
}

export default App;
