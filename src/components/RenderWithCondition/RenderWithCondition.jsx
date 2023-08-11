import React, { Component } from "react";

export default class RenderWithCondition extends Component {
  isRegister = true;

  renderButton() {
    if (this.isRegister) {
      return <p>Login successfully</p>;
    }
    return <p>Login error</p>;
  }

  render() {
    return (
      <div>
        <h3>RenderWithCondition</h3>
        <div>{this.isRegister ? <p>Đã đăng ký</p> : <p>Chưa đăng ký</p>}</div>
        {this.isRegister && <button className="btn btn-primary">Log in</button>}

        {this.renderButton()}
      </div>
    );
  }
}
