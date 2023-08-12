import React, { Component } from "react";

import "./style.css";
import Form from "./Form";
import VocabularyList from "./VocabularyList";

import data from "../../data/vocabularyList.json";

export default class BaiTapTuVung extends Component {
  state = {
    vocabularyList: data,
  };

  handleSave = (vocabulary) => {
    const data = [...this.state.vocabularyList];

    //lưu vào mảng là phẩn tử đầu tiên
    //const data = [vocabulary, ...this.state.vocabularyList];
    data.unshift(vocabulary);

    this.setState({
      vocabularyList: data,
    });
  };

  handleChangeFavorite = (id, isFavorited) => {
    // const data = [...this.state.vocabularyList];
    // const index = data.findIndex((element) => element.id === id);

    // data[index].isFavorited = !isFavorited;
    // // if (isFavorited) {
    // //   data[index].isFavorited = false;
    // // } else {
    // //   data[index].isFavorited = true;
    // // }

    // this.setState({
    //   vocabularyList: data,
    // });

    this.setState({
      vocabularyList: this.state.vocabularyList.map((element) =>
        element.id === id ? { ...element, isFavorited: !isFavorited } : element
      ),
    });
  };

  render() {
    return (
      <div className="mt-5 p-3 ml-5 border" style={{ width: 350, height: 580 }}>
        <Form handleSave={this.handleSave} />

        <div className="mt-2">
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
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="ml-2">Only Favorited</span>
              </div>
            </div>
          </ul>

          <div
            className="tab-content border-bottom border-top"
            id="pills-tabContent"
            style={{ height: 262, overflowX: "hidden" }}
          >
            <VocabularyList
              vocabularyList={this.state.vocabularyList}
              handleChangeFavorite={this.handleChangeFavorite}
            />

            <div
              className="tab-pane fade"
              id="pills-history"
              role="tabpanel"
              aria-labelledby="pills-history-tab"
            >
              <div className="border p-2 mb-2">
                <div className="content">
                  <div className="d-flex justify-content-between">
                    <span
                      style={{ lineHeight: "revert" }}
                      className="badge badge-success"
                    >
                      Add
                    </span>
                    <span>{new Date().toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="font-weight-bold">News</h5>
                    <p className="mb-0">Tin tức</p>
                  </div>
                </div>
              </div>

              <div className="border p-2 mb-2">
                <div className="content">
                  <div className="d-flex justify-content-between">
                    <span
                      style={{ lineHeight: "revert" }}
                      className="badge badge-danger"
                    >
                      Remove
                    </span>
                    <span>{new Date().toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="font-weight-bold">News</h5>
                    <p className="mb-0">Tin tức</p>
                  </div>
                </div>
              </div>

              <div className="border p-2 mb-2">
                <div className="content">
                  <div className="d-flex justify-content-between">
                    <span
                      style={{ lineHeight: "revert" }}
                      className="badge badge-primary"
                    >
                      Like
                    </span>
                    <span>{new Date().toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="font-weight-bold">News</h5>
                    <p className="mb-0">Tin tức</p>
                  </div>
                </div>
              </div>

              <div className="border p-2 mb-2">
                <div className="content">
                  <div className="d-flex justify-content-between">
                    <span
                      style={{ lineHeight: "revert" }}
                      className="badge badge-warning"
                    >
                      Unlike
                    </span>
                    <span>{new Date().toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="font-weight-bold">News</h5>
                    <p className="mb-0">Tin tức</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
