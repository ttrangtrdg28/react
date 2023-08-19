import data from "../../data/phoneList.json";

const DEFAULT_STATE = {
  phoneDetail: data[0],
  cartList: [],
  data: data,
};

export const phoneReducer = (state = DEFAULT_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_PHONE_DETAIL":
      state.phoneDetail = action.payload;
      break;

    case "ADD_TO_CART": {
      const data = [...state.cartList];

      const index = data.findIndex((element) => {
        return element.maSP === action.payload.maSP;
      });

      if (index !== -1) {
        //tăng số lượng
        data[index].soLuong += 1;
      } else {
        //push vào mảng
        data.push({ ...action.payload, soLuong: 1 });
      }
      state.cartList = data;
      break;
    }

    case "HANDLE_QUANTITY": {
      const { id, isIncrease } = action.payload;
      const data = [...state.cartList];

      const index = data.findIndex((element) => {
        return element.maSP === id;
      });

      if (isIncrease) {
        //tăng số lượng
        data[index].soLuong++;
      } else {
        //giảm số lượng
        if (data[index].soLuong === 1) {
          //hiện thông báo xóa
          const rs = window.confirm("Bạn có muốn xóa sản phẩm?");

          if (rs) {
            // xóa sản phẩm
            data.splice(index, 1);
          }
        } else {
          //giảm bình thường
          data[index].soLuong--;
        }
        state.cartList = data;
        break;
      }
    }
  }
  return { ...state };
};
