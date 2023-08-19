import React, { Component } from "react";

import { connect } from "react-redux";

class DienThoai extends Component {
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

// const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (phone) => {
      const action = {
        type: "ADD_TO_CART",
        payload: phone,
      };
      dispatch(action);
    },
    getPhoneDetail: (phone) => {
      const action = {
        type: "GET_PHONE_DETAIL",
        payload: phone,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(DienThoai);
