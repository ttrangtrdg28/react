import React, { Component } from "react";

export default class ChiTietGhe extends Component {
  render() {
    return (
      <div>
        <h5 className="text-warning">Danh sách ghế đã đặt (2)</h5>
        <div>
          <p>
            Ghế: số 1 - 100$
            <span className="ml-3 cursor-pointer text-danger">[HỦY]</span>
          </p>
          <p>
            Ghế: số 2 - 300$
            <span className="ml-3 cursor-pointer text-danger">[HỦY]</span>
          </p>
        </div>
      </div>
    );
  }
}
