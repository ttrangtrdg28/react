import React, { Component } from "react";

export default class HistoryItem extends Component {
  render() {
    const { en, vi, action, date } = this.props.element;

    return (
      <div className="border p-2 mb-2">
        <div className="content">
          <div className="d-flex justify-content-between">
            <span
              style={{ lineHeight: "revert" }}
              className="badge badge-success"
            >
              {action}
            </span>
            <span>{date}</span>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="font-weight-bold">{en}</h5>
            <p className="mb-0">{vi}</p>
          </div>
        </div>
      </div>
    );
  }
}
