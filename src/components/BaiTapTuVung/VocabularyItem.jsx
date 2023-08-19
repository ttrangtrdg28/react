import React, { Component } from "react";

export default class VocabularyItem extends Component {
  render() {
    return (
      <div className="border p-3 mb-2" onDoubleClick={() => console.log(2)}>
        <div className="content">
          <div className="d-flex justify-content-between">
            <h5 className="font-weight-bold">{this.props.element.en}</h5>
            {this.props.element.isFavorited} ?
            <i
              onClick={() =>
                this.props.handleChangeFavorite(this.props.element.id, true)
              }
              className="fa-solid fa-heart text-danger"
            />
            :
            <i
              onClick={() =>
                this.props.handleChangeFavorite(this.props.element.id, false)
              }
              className="fa-regular fa-heart"
            />
          </div>
          <p className="mb-0">{this.props.element.vi}</p>
        </div>
      </div>
    );
  }
}
