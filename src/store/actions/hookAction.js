import { FETCH_DISTRICTS, FETCH_PROVINCES } from "../types/hookType";
import axios from "axios";

//async action
const fetchProvincesAction = () => {
  const action = async (dispatch, getState) => {
    const hookState = getState().hookReducer;
    // console.log(hookState);

    if (hookState.provinces.length) {
      return;
    }

    if (hookState.districts.length) {
      return;
    }

    const result = await axios({
      url: "https://63661fa979b0914b75c9b9a7.mockapi.io/provinces",
      method: "GET",
    });

    dispatch({
      type: FETCH_PROVINCES,
      payload: result.data,
    });
  };

  return action;
};

const fetchDistrictsAction = (data) => {
  return {
    type: FETCH_DISTRICTS,
    payload: data,
  };
};

export { fetchDistrictsAction, fetchProvincesAction };
