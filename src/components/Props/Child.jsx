import React, { Component } from "react";

/**
 * PROPS là cách truyền dữ liệu từ cha vào con
 * muốn truyền dữ liệu từ con -> cha: truyền function
 * props không thay đổi được
 */

export default class Child extends Component {
  render() {
    // console.log(this.props);

    return (
      <div className="card w-25">
        <img
          className="card-img-top"
          src={this.props.element.imgUrl}
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.element.tenSP}</h4>
          <button
            onClick={() => this.props.showName(this.props.element.tenSP)}
            className="btn btn-primary"
          >
            SHOW NAME
          </button>

          <button
            onClick={() => this.props.changImage(this.props.element.imgUrl)}
            className="btn btn-success"
          >
            CHANGE IMAGE
          </button>
        </div>
      </div>
    );
  }
}
