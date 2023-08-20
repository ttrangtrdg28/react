import data from "../../data/danhSachGhe.json";

const DEFAULT_STATE = {
  danhSachGhe: data,
};

export const datGheReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "DAT_GHE":
      // const data = [...state.danhSachGhe];
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));

      const index = data.findIndex(
        (element) => element.SoGhe === action.payload.SoGhe
      );
      data[index].DangChon = !data[index].DangChon;

      state.danhSachGhe = data;
      break;
  }

  return { ...state };
};
