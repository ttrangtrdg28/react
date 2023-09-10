import { FETCH_DISTRICTS, FETCH_PROVINCES } from "../types/hookType";

const DEFAULT_STATE = {
  provinces: [],
  districts: [],
};

export const hookReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_PROVINCES: {
      state.provinces = action.payload;
      break;
    }

    case FETCH_DISTRICTS: {
      state.districts = action.payload;
      break;
    }
  }
  return { ...state };
};
