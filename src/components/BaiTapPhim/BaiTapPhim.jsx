import React, { Component } from "react";
import dataFilm from "../../data/DataFilms.json";

export default class extends Component {
  renderFilmList = () => {
    const content = dataFilm.map((element, index) => {
      return (
        <div key={index} className="col-3">
          <div className="card">
            <img className="card-img-top" src={element.hinhAnh} />
            <div className="card-body">
              <h4 className="card-title">{element.tenPhim}</h4>
              <p className="card-text">{element.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
    return content;
  };
  render() {
    return <div className="row">{this.renderFilmList()}</div>;
  }
}
