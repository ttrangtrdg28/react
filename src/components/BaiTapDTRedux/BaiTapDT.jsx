import React, { Component } from "react";
import DanhSachDT from "./DanhSachDT";
import ChiTietDT from "./ChiTietDT";
import data from "../../data/phoneList.json";
import GioHang from "./GioHang";

export default class BaiTapDTRedux extends Component {
  state = {
    cartList: [],
  };

  // handleQuantity = (id, isIncrease) => {
  //   const data = [...this.state.cartList];
  //   const index = data.findIndex((element) => {
  //     return element.maSP === id;
  //   });

  //   if (isIncrease) {
  //     //tăng số lượng
  //     data[index].soLuong++;
  //   } else {
  //     //giảm số lượng
  //     if (data[index].soLuong === 1) {
  //       //hiện thông báo xóa
  //       const rs = window.confirm("Bạn có muốn xóa sản phẩm?");

  //       if (rs) {
  //         // xóa sản phẩm
  //         data.splice(index, 1);
  //       }
  //     } else {
  //       //giảm bình thường
  //       data[index].soLuong--;
  //     }

  //     // data[index].soLuong--;
  //   }

  //   this.setState({
  //     cartList: data,
  //   });
  // };

  // addToCart = (phone) => {
  //   const data = [...this.state.cartList];
  //   const index = data.findIndex((element) => {
  //     return element.maSP === phone.maSP;
  //   });

  //   if (index !== -1) {
  //     //tăng số lượng
  //     data[index].soLuong += 1;
  //   } else {
  //     //push vào mảng
  //     data.push({ ...phone, soLuong: 1 });
  //   }

  //   this.setState(
  //     {
  //       cartList: data,
  //     },
  //     () => {
  //       console.log(data);
  //     }
  //   );
  // };

  handleRemove = (id) => {
    const result = window.confirm("Bạn có muốn xóa sản phẩm?");

    if (result) {
      const data = [...this.state.cartList];
      const index = data.findIndex((element) => {
        return data.maSP === id;
      });

      data.splice(index, 1);

      this.setState({
        cartList: data,
      });
    }
  };

  getPhoneDetail = (phone) => {
    this.setState({
      phoneDetail: phone,
    });
  };

  render() {
    return (
      <section className="w-75 mx-auto">
        <GioHang />
        <DanhSachDT />
        <ChiTietDT />
      </section>
    );
  }
}
