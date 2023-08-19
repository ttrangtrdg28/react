import React, { Component } from "react";
import DienThoai from "./DienThoai";

import { connect } from "react-redux";

class DanhSachDT extends Component {
  renderPhoneList = () => {
    return this.props.data.map((element, index) => {
      return (
        <div key={index} className="col-4">
          <DienThoai element={element} />
        </div>
      );
    });
  };
  render() {
    return <div className="row mt-3">{this.renderPhoneList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.phoneReducer.data,
  };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(DanhSachDT);
