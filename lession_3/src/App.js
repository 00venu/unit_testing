import React, { Component } from "react";
import "./App.css";
import Congrats from "./congrats";
import GuessWords from "./GuessWords";
import { getLetterMatchCount } from "./helpers";
import Input from "./Input";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Congrats success={true} />
        <Input />
        <GuessWords
          guessedWords={[{ guessedWord: "Train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
