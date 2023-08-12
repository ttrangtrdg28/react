import React, { Component } from "react";
import VocabularyItem from "./VocabularyItem";

export default class VocabularyList extends Component {
  renderContent = () => {
    return this.props.vocabularyList.map((element) => {
      return (
        <VocabularyItem
          key={element.id}
          element={element}
          handleChangeFavorite={this.props.handleChangeFavorite}
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
