import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./store/actions/success";
import Congrats from "./congrats";

class Input extends Component {
  state = {
    guessWord: "",
  };
  render() {
    const contents = this.props.success ? (
      <Congrats success={this.props.success} />
    ) : (
      <div className="form-group mb-2" data-test="component-input">
        <label>Guess Word</label>
        <input
          type="text"
          className="form-control"
          placeholder="Guess Word"
          data-test="input-box"
          onChange={(e) => this.setState({ guessWord: e.target.value })}
        />
        <button
          className="btn btn-primary"
          style={{ marginTop: "10px" }}
          data-test="button-submit"
          onClick={() => this.props.guessWord(this.state.guessWord)}
        >
          Submit
        </button>
      </div>
    );
    return <div>{contents}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success,
  };
};

export default connect(mapStateToProps, { guessWord })(Input);
