import data from "../../data/danhSachNguoiDung.json";

const DEFAULT_STATE = {
  userList: data,
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "":
      break;
  }

  return { ...state };
};
