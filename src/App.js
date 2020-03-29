import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <img src={ picture } alt=""/>
    </div>
  );
}

const foodIlike = [
  {
    name: "Coffee",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bmj.com%2Fsites%2Fdefault%2Ffiles%2Fsites%2Fdefautl%2Ffiles%2Fattachments%2Fbmj-article%2F2017%2F11%2Fcoffee_heart2_0.jpg&f=1&nofb=1"
  },
  {
    name: "Yogurt",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F77%2FObstjoghurt01.jpg&f=1&nofb=1"
  },
  {
    name: "Salmon",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads1.bundoo.com%2Fwp-content%2Fuploads%2F2015%2F01%2FWhen-can-your-child-eat-sushi-and-raw-fishTHUMB-800x500.png&f=1&nofb=1"
  },
  {
    name: "Dduckbbonkkki",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F_fmoit9SU0u0%2FSeUAZgCGIsI%2FAAAAAAAAA-A%2Frnw0Y4aOxFE%2Fs320%2Fddukbokki.jpg&f=1&nofb=1"
  },
  {
    name: "Sandwich",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fswiggy%2Fimage%2Fupload%2Ffl_lossy%2Cf_auto%2Cq_auto%2Fvnevi12upxl9xy5bk2pw&f=1&nofb=1"
  },
]
function App() {
  return (
    <div>
        { foodIlike.map (dish => <Food name={dish.name} picture={dish.image} />
        )}
    </div>
  ); 
   
}

export default App;
