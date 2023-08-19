import React, { Component } from "react";

import "./style.css";
import Form from "./Form";
import VocabularyList from "./VocabularyList";

import data from "../../data/vocabularyList.json";
import TabList from "./TabList";
import HistoryList from "./HistoryList";

export default class BaiTapTuVung extends Component {
  state = {
    vocabularyList: data,
    isOnlyFavorited: false,
    historyList: [],
  };

  handleSave = (vocabulary) => {
    const data = [...this.state.vocabularyList];

    //lưu vào mảng là phẩn tử đầu tiên
    //const data = [vocabulary, ...this.state.vocabularyList];
    data.unshift(vocabulary);

    this.setState(
      {
        vocabularyList: data,
      },
      () => {
        this.handleAddHistory("Add", vocabulary.en, vocabulary.vi);
      }
    );
  };

  handleChangeFavorite = (id, isFavorited) => {
    const data = [...this.state.vocabularyList];
    const index = data.findIndex((element) => element.id === id);

    data[index].isFavorited = !isFavorited;
    // if (isFavorited) {
    //   data[index].isFavorited = false;
    // } else {
    //   data[index].isFavorited = true;
    // }

    this.setState(
      {
        vocabularyList: data,
      },
      () => {
        this.handleAddHistory(
          data[index].isFavorited ? "Like" : "Unlike",
          data[index].en,
          data[index].vi
        );
      }
    );

    // this.setState({
    //   vocabularyList: this.state.vocabularyList.map((element) =>
    //     element.id === id ? { ...element, isFavorited: !isFavorited } : element
    //   ),
    // });
  };

  handleChangeFilter = (isChecked) => {
    this.setState({
      isOnlyFavorited: isChecked,
    });
  };

  handleRemove = (id) => {
    const data = [...this.state.vocabularyList];
    const index = data.findIndex((element) => element.id === id);
    const vocabulary = data[index];

    data.splice(index, 1);

    this.setState(
      {
        vocabularyList: data,
      },
      () => {
        this.handleAddHistory("Delete", vocabulary.en, vocabulary.vi);
      }
    );
  };

  handleAddHistory = (action, en, vi) => {
    const history = {
      action: action,
      en: en,
      vi: vi,
      data: new Date().toLocaleString(),
    };

    const data = [history, ...this.state.historyList];

    this.setState({
      historyList: data,
    });
  };

  render() {
    return (
      <div className="mt-5 p-3 ml-5 border" style={{ width: 350, height: 580 }}>
        <Form handleSave={this.handleSave} />

        <div className="mt-2">
          <TabList handleChangeFilter={this.handleChangeFilter} />

          <div
            className="tab-content border-bottom border-top"
            id="pills-tabContent"
            style={{ height: 262, overflowX: "hidden" }}
          >
            <VocabularyList
              vocabularyList={this.state.vocabularyList}
              isOnlyFavorited={this.state.isOnlyFavorited}
              handleChangeFavorite={this.handleChangeFavorite}
              handleRemove={this.handleRemove}
            />

            <HistoryList historyList={this.state.historyList} />
          </div>
        </div>
      </div>
    );
  }
}
