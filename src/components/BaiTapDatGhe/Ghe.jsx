import React, { Component } from "react";
import { connect } from "react-redux";

class Ghe extends Component {
  render() {
    const { SoGhe, TenGhe, Gia, DangChon, TrangThai } = this.props.element;

    return (
      <button
        onClick={() =>
          this.props.dispatch({ type: "DAT_GHE", payload: this.props.element })
        }
        disabled={TrangThai}
        className={`chair ${DangChon && "btn-success"}`}
      >
        {SoGhe}
      </button>
    );
  }
}

export default connect()(Ghe);
