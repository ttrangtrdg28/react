import React, { Component } from "react";

/**
 * Có 3 cách:
 * 1. Stylesheet
 * 2. module
 * 3. inline
 */

/**
 * 1. Stylesheet
 * Ưu điểm: để tiếp cận
 * Nhược điểm: những file khác không import cũng sẽ có css
 */

import "./style.css";

/**
 * 2. Module
 * Ưu điểm: Giải quyết nhược điểm của stylesheet
 * Nhược điểm: Khó dùng
 */

import styleBC51 from "./style.module.css";

/**
 * 3. Inline
 * Ưu điểm: Dynamic giá trị thuộc tính
 * Nhược điểm: Không tái sử dụng được
 */
export default class Styling extends Component {
  render() {
    return (
      <div>
        <p className="cybersoft">STYLESHEET</p>
        <p
          className={`${styleBC51.module} ${styleBC51.fontWeight} ${styleBC51["text-35"]}`}
        >
          MODULE
        </p>

        <p style={{ color: "blue", backgroundColor: "green", fontSize: 30 }}>
          INLINE
        </p>
      </div>
    );
  }
}
