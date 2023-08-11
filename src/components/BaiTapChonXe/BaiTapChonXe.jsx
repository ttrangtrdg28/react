import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imageUrl: "./products/black-car.jpg",
  };

  handleChangeBlackCar = () => {
    this.setState({
      imageUrl: "./products/black-car.jpg",
    });
  };

  handleChangeSteelCar = () => {
    this.setState({
      imageUrl: "./products/steel-car.jpg",
    });
  };

  handleChangeSilverCar = () => {
    this.setState({
      imageUrl: "./products/silver-car.jpg",
    });
  };

  handleChangeRedCar = () => {
    this.setState({
      imageUrl: "./products/red-car.jpg",
    });
  };

  handleChangeCar = (color) => {
    this.setState({
      imageUrl: `./products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-8">
          <img className="img-fluid" src={this.state.imageUrl} />
        </div>

        <div className="col-4">
          <div
            onClick={() => this.handleChangeCar("black")}
            className="border d-flex align-items-center p-4"
          >
            <img className="img-fluid" src="./icons/icon-black.jpg" />
            <p className="pl-4">Crystal Black</p>
          </div>

          <div
            onClick={() => this.handleChangeCar("steel")}
            className="border d-flex align-items-center p-4"
          >
            <img className="img-fluid" src="./icons/icon-steel.jpg" />
            <p className="pl-4">Modern Steel</p>
          </div>

          <div
            onClick={() => this.handleChangeCar("silver")}
            className="border d-flex align-items-center p-4"
          >
            <img className="img-fluid" src="./icons/icon-silver.jpg" />
            <p className="pl-4">Lunar Silver</p>
          </div>

          <div
            onClick={() => this.handleChangeCar("red")}
            className="border d-flex align-items-center p-4"
          >
            <img className="img-fluid" src="./icons/icon-red.jpg" />
            <p className="pl-4">Rallye Red</p>
          </div>
        </div>
      </div>
    );
  }
}
