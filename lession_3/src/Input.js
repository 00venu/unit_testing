import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <div className="form-group mb-2" data-test="component-input">
        <label>Guess Word</label>
        <input
          type="text"
          className="form-control"
          placeholder="Guess Word"
          data-test="input-box"
        />
        <button
          className="btn btn-primary"
          style={{ marginTop: "10px" }}
          data-test="button-submit"
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

export default connect(mapStateToProps)(Input);
