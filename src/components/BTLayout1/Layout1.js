import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

export default class Layout1 extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Header />
        </div>

        <div className="col-4">
          <Navigation />
        </div>

        <div className="col-8">
          <Content />
        </div>

        <div className="col-12">
          <Footer />
        </div>
      </div>
    );
  }
}
