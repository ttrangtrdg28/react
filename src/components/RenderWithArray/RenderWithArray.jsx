import React, { Component } from "react";

export default class RenderWithArray extends Component {
  studentList = [
    {
      id: 1,
      name: "Sachin",
    },
    {
      id: 2,
      name: "Jonh",
    },
    {
      id: 3,
      name: "Sanish",
    },
  ];

  renderStudentList = () => {
    const content = this.studentList.map((element, index) => {
      return <p key={index}>{element.name}</p>;
    });
    return content;
  };

  render() {
    return <div>{this.renderStudentList()}</div>;
  }
}
