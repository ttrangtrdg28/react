import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";

import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../store/actions/datGheAction";

class ChiTietGhe extends Component {
  renderContent = () => {
    return this.props.danhSachGhe.map((element) => {
      const { SoGhe, TenGhe, Gia, DangChon, TrangThai } = element;

      return (
        <p key={SoGhe}>
          Ghế: {TenGhe} - {Gia}$
          <span
            onClick={() => this.props.dispatch(datGheAction(element))}
            className="ml-3 cursor-pointer text-danger"
          >
            [HỦY]
          </span>
        </p>
      );
    });
  };

  render() {
    return (
      <div>
        <h5 className="text-warning">
          Danh sách ghế đã đặt ({this.props.danhSachGhe.length})
        </h5>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datGheReducer.danhSachGhe.filter(
      (element) => element.DangChon === true
    ),
  };
};

export default connect(mapStateToProps)(ChiTietGhe);
