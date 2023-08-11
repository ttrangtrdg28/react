import React, { Component } from "react";
import Child from "./Child";
import Children from "./Children";

export default class Parent extends Component {
  carList = [
    {
      tenSP: "BLACK",
      imgUrl: "./products/black-car.jpg",
    },

    {
      tenSP: "RED",
      imgUrl: "./products/red-car.jpg",
    },

    {
      tenSP: "STEEL",
      imgUrl: "./products/steel-car.jpg",
    },

    {
      tenSP: "SILVER",
      imgUrl: "./products/silver-car.jpg",
    },
  ];

  state = {
    imageUrl: "./products/black-car.jpg",
  };

  renderCarList = () => {
    return this.carList.map((element, index) => {
      return (
        <Child
          key={index}
          changImage={this.changImage}
          showName={this.showName}
          element={element}
          //   tenSP={element.tenSP}
          //   imgUrl={element.imgUrl}
        />
      );
    });
  };

  showName = (name) => {
    alert(name);
  };

  changImage = (imageUrl) => {
    this.setState({
      imageUrl,
    });
  };

  render() {
    return (
      <div className="d-flex flex-wrap">
        {this.renderCarList()}

        <Children>
          <h3>HELLO</h3>
          <p>bootcamp 51</p>
        </Children>

        <img src={this.state.imageUrl} alt="" width={500} />
      </div>
    );
  }
}
