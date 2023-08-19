import React, { Component } from "react";
import Ghe from "./Ghe";

import { connect } from "react-redux";

class DanhSachGhe extends Component {
  renderContent = () => {
    return this.props.data.map((element) => {
      return <Ghe key={element.SoGhe} element={element} />;
    });
  };
  render() {
    return (
      <div>
        <h5 className="py-2 bg-dark text-center text-white">TÀI XẾ</h5>
        <div className="d-flex flex-wrap">{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.datGheReducer.dangSachGhe,
  };
};

export default connect(mapStateToProps)(DanhSachGhe);
