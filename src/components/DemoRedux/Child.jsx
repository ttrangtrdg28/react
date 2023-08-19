import React, { Component } from "react";
import { connect } from "react-redux";

class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button
          onClick={() => this.props.increase()}
          className="btn btn-primary"
        >
          INCREASE
        </button>
        <button
          onClick={() => this.props.decrease()}
          className="btn btn-success"
        >
          DECREASE
        </button>
        <button
          onClick={() => this.props.random(Date.now())}
          className="btn btn-warning"
        >
          RANDOM
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      const action = {
        type: "INCREASE",
      };

      dispatch(action);
    },
    decrease: () => {
      const action = {
        type: "DECREASE",
      };

      dispatch(action);
    },
    random: (value) => {
      const action = {
        type: "RANDOM",
        // value, // value = value
        payload: value,
      };

      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Child);
