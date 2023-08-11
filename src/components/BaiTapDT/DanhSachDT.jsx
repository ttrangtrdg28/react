import React, { Component } from "react";
import DienThoai from "./DienThoai";

export default class DanhSachDT extends Component {
  renderPhoneList = () => {
    return this.props.data.map((element, index) => {
      return (
        <div key={index} className="col-4">
          <DienThoai
            addToCart={this.props.addToCart}
            getPhoneDetail={this.props.getPhoneDetail}
            element={element}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row mt-3">{this.renderPhoneList()}</div>;
  }
}
