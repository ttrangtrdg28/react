import { Button } from "bootstrap";
import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleRegister() {
    alert("Đăng ký tài khoản thành công");
  }

  handleLogout(username) {
    alert(`${username} logout sucessfully`);
  }

  render() {
    return (
      <div>
        <h3>HandleEvent</h3>

        {/* Không có tham số */}
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Login
        </button>

        <button className="btn btn-warning" onClick={this.handleRegister}>
          Register
        </button>

        {/* Có tham số */}
        <button
          className="btn btn-primary"
          onClick={this.handleLogout.bind(this, "Trang nè")}
        >
          LogOut
        </button>

        <button
          className="btn btn-primary"
          onClick={() => this.handleLogout("Trang nè")}
        >
          LogOut 2
        </button>
      </div>
    );
  }
}
