import React, { Component } from "react";

export default class TabList extends Component {
  render() {
    return (
      <ul
        className="nav nav-pills mb-3 d-flex justify-content-between"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item w-50" role="presentation">
          <button
            className="nav-link border-0 w-100 active"
            id="pills-vocabulary-tab"
            data-toggle="pill"
            data-target="#pills-vocabulary"
            type="button"
            role="tab"
            aria-controls="pills-vocabulary"
            aria-selected="true"
          >
            Vocabulary
          </button>
        </li>
        <li className="nav-item w-50" role="presentation">
          <button
            className="nav-link border-0 w-100"
            id="pills-history-tab"
            data-toggle="pill"
            data-target="#pills-history"
            type="button"
            role="tab"
            aria-controls="pills-history"
            aria-selected="false"
          >
            History
          </button>
        </li>
        <div className="d-flex flex-column">
          <small className="text-muted form-text text-nowrap">
            Double click to remove vocabulary
          </small>
          <div className="d-flex align-items-center">
            <label className="switch mb-0">
              <input
                onChange={(event) => {
                  this.props.handleChangeFilter(event.target.checked);
                }}
                type="checkbox"
              />
              <span className="slider round"></span>
            </label>
            <span className="ml-2">Only Favorited</span>
          </div>
        </div>
      </ul>
    );
  }
}
