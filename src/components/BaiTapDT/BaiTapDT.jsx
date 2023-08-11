import React, { Component } from "react";
import DanhSachDT from "./DanhSachDT";
import ChiTietDT from "./ChiTietDT";
import phoneList from "../../data/phoneList.json";
import GioHang from "./GioHang";

export default class BaiTapDT extends Component {
  state = {
    phoneDetail: phoneList[0],
    cartList: [],
  };

  addToCart = (phone) => {
    const data = [...this.state.cartList];

    data.push({ ...phone, soLuong: 1 });

    this.setState(
      {
        cartList: data,
      },
      () => {
        console.log(data);
      }
    );
  };

  getPhoneDetail = (phone) => {
    this.setState({
      phoneDetail: phone,
    });
  };

  render() {
    return (
      <section className="w-75 mx-auto">
        <GioHang cartList={this.state.cartList} />
        <DanhSachDT
          addToCart={this.addToCart}
          getPhoneDetail={this.getPhoneDetail}
          data={phoneList}
        />
        <ChiTietDT detail={this.state.phoneDetail} />
      </section>
    );
  }
}
