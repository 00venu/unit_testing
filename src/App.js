import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">
          Counter Display {this.state.counter}
        </h1>
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Counter Button
        </button>
      </div>
    );
  }
}

export default App;
