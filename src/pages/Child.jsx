import React, { memo } from "react";

function Child(props) {
  console.log("Child re-render");

  return <div>Name: {props.name}</div>;
}

// memo = PureComponent: chỉ render lại kho props phụ thuộc thay đổi
export default memo(Child);
