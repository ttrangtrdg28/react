import React, { Component } from "react";

export default class Children extends Component {
  render() {
    return (
      <div>
        <h1>CHILDREN DEMO</h1>
        {this.props.children}
      </div>
    );
  }
}
