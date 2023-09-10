import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDistrictsAction,
  fetchProvincesAction,
} from "../store/actions/hookAction";
import { GlobalContext } from "../contexts/GlobalContext";

export default function BaiTapHook() {
  const [globalState, setGlobalState] = useContext(GlobalContext);

  // chạy 1 lần sau khi render
  useEffect(() => {
    fetchProvinces();
    fetchDistricts();
  }, []);

  const dispatch = useDispatch();
  const hookState = useSelector((state) => state.hookReducer);

  console.log(hookState);

  const fetchProvinces = () => {
    dispatch(fetchProvincesAction());
  };

  const fetchDistricts = async () => {
    const result = await axios({
      url: "https://63661fa979b0914b75c9b9a7.mockapi.io/districts",
      method: "GET",
    });

    dispatch(fetchDistrictsAction(result.data));
  };

  const [selectedProvinces, setSelectedProvinces] = useState();

  const handleChangeProvince = (event) => {
    setSelectedProvinces(event.target.value);
    setGlobalState({ provinceId: event.target.value });
  };

  return (
    <form className="d-flex mx-auto w-50">
      <div className="form-group mr-2 mb-0" style={{ minWidth: "40%" }}>
        <label>Thành phố</label>
        <select onChange={handleChangeProvince} className="form-control">
          <option>Chọn thành phố</option>
          {hookState.provinces.map((element) => (
            <option key={element.id} value={element.id}>
              {element.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mr-2 mb-0" style={{ minWidth: "40%" }}>
        <label>Quận</label>
        <select className="form-control">
          <option>Chọn Quận</option>
          {hookState.districts
            .filter((element) => element.provinceId === selectedProvinces)
            .map((element) => (
              <option key={element.id}>{element.name}</option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <label className="d-block">&nbsp;</label>
        <button className="btn btn-info">TÌM KIẾM</button>
      </div>
    </form>
  );
}
