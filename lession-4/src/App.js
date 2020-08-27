import React, { Component } from "react";
import "./App.css";
import GuessWords from "./GuessWords";
import { getLetterMatchCount } from "./helpers";
import Input from "./Input";
import { getSecrectWord } from "./store/actions/success";
import { connect } from "react-redux";

export class UnConnectedApp extends Component {
  componentDidMount() {
    this.props.getSecrectWord();
  }
  render() {
    console.log(this.props.state);
    return (
      <div className="container">
        <Input />
        <GuessWords guessedWords={this.props.state.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { getSecrectWord })(UnConnectedApp);
