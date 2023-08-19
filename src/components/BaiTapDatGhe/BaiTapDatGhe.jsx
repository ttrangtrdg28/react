import React, { Component } from "react";
import "./style.scss";
import DanhSachGhe from "./DanhSachGhe";
import ChiTietGhe from "./ChiTietGhe";

export default class BaiTapDatGhe extends Component {
  render() {
    return (
      <div className="w-50 mt-5 mx-auto">
        <h1 className="text-warning text-center py-3">BÀI TẬP ĐẶT GHẾ</h1>
        <div className="row">
          <div className="col-6">
            <DanhSachGhe />
          </div>
          <div className="col-6">
            <ChiTietGhe />
          </div>
        </div>
      </div>
    );
  }
}
