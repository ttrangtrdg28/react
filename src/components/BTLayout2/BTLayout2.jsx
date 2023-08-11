import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import List from "./List";
import Footer from "./Footer";

export default class BTLayout2 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <List />
        <Footer />
      </div>
    );
  }
}
