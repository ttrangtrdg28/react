import React, { Component } from "react";

export default class State extends Component {
  // state la 1 thuộc tính mặc định của react
  state = {
    isShowMessage: true,
  };

  handleHideMessage = () => {
    // không thay đổi giá trị trực tiếp của stat mà phải dùng setState
    // this.state.isShowMessage = false;

    console.log(this.state.isShowMessage); //true

    // setState có 2 tham số
    // tham số 1: state mới
    // tham số 2: callback để xử lý async
    this.setState(
      {
        isShowMessage: false,
      },
      () => {
        console.log(this.state.isShowMessage); //fasle
      }
    );

    console.log(this.state.isShowMessage); //true
  };

  handleShowMessage = () => {
    this.setState({
      isShowMessage: true,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleHideMessage} className="btn btn-primary">
          HIDDEN
        </button>
        <button onClick={this.handleShowMessage} className="btn btn-success">
          SHOW
        </button>

        {this.state.isShowMessage && <p>BOOTCAMP 51 CYBERSOFT</p>}
      </div>
    );
  }
}
