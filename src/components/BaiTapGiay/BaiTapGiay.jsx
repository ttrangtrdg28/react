import React, { Component } from "react";
import data from "../../data/data.json";
import Item from "./Item";

export default class BaiTapGiay extends Component {
  renderList = () => {
    return data.map((element, index) => {
      return (
        <div key={index} className="col-3">
          <Item showDecription={this.showDecription} element={element} />
        </div>
      );
    });
  };

  showDecription = (description) => {
    alert(description);
  };

  render() {
    return <div className="row">{this.renderList()}</div>;
  }
}
