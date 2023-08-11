import React, { Component } from "react";

export default class BaiTapStyling extends Component {
  state = {
    fontSize: 16,
  };

  handleDecrease = () => {
    this.setState({
      fontSize: this.state.fontSize - 10,
    });
  };

  handleIncrease = () => {
    this.setState({
      fontSize: this.state.fontSize + 10,
    });
  };

  handleChange = (value) => {
    this.setState({
      fontSize: this.state.fontSize + value,
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handleChange(-10);
          }}
          className="btn btn-danger"
        >
          DECREASE
        </button>
        <button
          onClick={() => {
            this.handleChange(10);
          }}
          className="btn btn-success"
        >
          INCREASE
        </button>
        <p style={{ fontSize: this.state.fontSize }}>BOOTCAMP 51</p>
      </div>
    );
  }
}
