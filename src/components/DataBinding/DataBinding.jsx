import React, { Component } from "react";

export default class DataBinding extends Component {
  property = "Đỗ Xuân Hợp";

  renderPrice() {
    return 3000;
  }

  renderElement() {
    return <button className="btn btn-primary">Log in</button>;
  }
  render() {
    const variable = "Trang Thach";

    return (
      <div>
        <h3>DataBinding</h3>
        <p>Variable: {variable}</p>
        <p>Property: {this.property}</p>
        <p>Price: {this.renderPrice()}</p>
        <p>Element: {this.renderElement()}</p>
      </div>
    );
  }
}
