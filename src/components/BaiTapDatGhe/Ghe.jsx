import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../store/actions/datGheAction";

class Ghe extends Component {
  render() {
    const { SoGhe, TenGhe, Gia, DangChon, TrangThai } = this.props.element;

    return (
      <button
        onClick={() => this.props.dispatch(datGheAction(this.props.element))}
        disabled={TrangThai}
        className={`chair ${DangChon && "btn-success"}`}
      >
        {SoGhe}
      </button>
    );
  }
}

export default connect()(Ghe);
