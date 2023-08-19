import React, { Component } from "react";
import VocabularyItem from "./VocabularyItem";

export default class VocabularyList extends Component {
  renderContent = () => {
    const data = this.props.vocabularyList.filter((element) => {
      if (this.props.isOnlyFavorited) {
        //filter dòng có isOnlyFavorited = true
        return element.isFavorited === true;
      } else {
        //hiển thị tất cả
        return true;
      }
    });

    return data.map((element) => {
      return (
        <VocabularyItem
          key={element.id}
          element={element}
          handleChangeFavorite={this.props.handleChangeFavorite}
          handleRemove={this.props.handleRemove}
        />
      );
    });
  };

  render() {
    return (
      <div
        className="tab-pane fade show active"
        id="pills-vocabulary"
        role="tabpanel"
        aria-labelledby="pills-vocabulary-tab"
      >
        {this.renderContent()}
      </div>
    );
  }
}
