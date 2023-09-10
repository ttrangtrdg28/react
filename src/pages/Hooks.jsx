import React, { useState, useEffect, useMemo, useCallback } from "react";
import Child from "./Child";
import { wrapperBackground } from "../hocs/wrapperBackground";
import BaiTapChonXe from "../components/BaiTapChonXe/BaiTapChonXe";
import BaiTapHook from "./BaiTapHook";

const BaiTapChonXeBackground = wrapperBackground(BaiTapChonXe, "bg-light");
export default function Hooks() {
  const [number, setNumber] = useState(0);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  //cache lại dữ liệu và chỉ tính toán lại nếu trong [] thỏa điều kiện
  const count = useMemo(() => {
    let count = 0;

    while (count < 100000000) {
      count++;
    }

    return count;
  }, [number]);

  // console.log(count);

  //thay thế componentDidMount và componentDidUpdate
  useEffect(() => {
    // console.log("component");
  });

  //thay thế componentDidMount
  //useEffect: tham số 1 là call back, tham số 2 là dependency list
  useEffect(() => {
    // console.log("componentDidMount");

    return () => {
      // console.log("componentWillUnmount");
    };
  }, []);

  //thay thế componentDidMount
  useEffect(() => {
    if (number !== 0 || form.username !== "") {
      // console.log("componentDidUpdate");
    }
  }, [number, form.username]); //nếu number thay đổi thì callback trong useEffect sẽ chạy lại

  // const handleIncrease = () => {
  //   setNumber(number + 1);
  // };

  // giống useMemo nhưng cache function thay vì giá trị
  const handleIncrease = useCallback(() => {
    console.log("number", number);
    setNumber(number + 1);
  }, [number]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <p>number = {number}</p>
      <button onClick={handleIncrease} className="btn btn-primary">
        Increase
      </button>

      <hr />

      <p>Username: {form.username}</p>
      <p>Password: {form.password}</p>
      <div className="w-50">
        <div className="form-group">
          <input
            onChange={handleChange}
            name="username"
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
      </div>

      <hr />

      <Child name="HOOKS" />

      <BaiTapHook />

      <BaiTapChonXeBackground />
    </div>
  );
}
