import React, { Component } from "react";

export default class DienThoai extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          alt="..."
          src={this.props.element.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.element.tenSP}</h4>
          <div className="d-flex justify-content-around">
            <button
              onClick={() => this.props.getPhoneDetail(this.props.element)}
              className="btn btn-success"
            >
              XEM CHI TIẾT
            </button>

            <button
              onClick={() => this.props.addToCart(this.props.element)}
              className="btn btn-primary"
            >
              THÊM GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>
    );
  }
}
