import React, { Component } from "react";

export default class ChiTietDT extends Component {
  render() {
    return (
      <div className="row mt-4">
        <div className="col-4 text-center">
          <h2>{this.props.detail.tenSP}</h2>
          <img
            className="img-fluid"
            alt="..."
            src={this.props.detail.hinhAnh}
          />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <td colSpan={2}>
                  <h1>Thông số kĩ thuật</h1>
                </td>
              </tr>
              <tr>
                <td>Màn hình</td>
                <td>{this.props.detail.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{this.props.detail.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{this.props.detail.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{this.props.detail.cameraSau}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{this.props.detail.rom}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{this.props.detail.ram}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
