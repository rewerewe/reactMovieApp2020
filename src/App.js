import React from "react";

class App extends React.Component {
  
  state = {
    count: 0
  };

  // state를 set할때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법! 
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

  render() {
    return (
        <div>
          <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
      );
  }  
}

export default App;
