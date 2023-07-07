import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart", //state 이름
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ], //state값
  reducers: {
    plusCount(state, action) {
      let index = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[index].count += 1;
    },
    minusCount(state, action) {
      let index = state.findIndex((a) => {
        return a.id == action.payload;
      });
      if (state[index].count > 1) {
        state[index].count -= 1;
      } else if (state[index].count == 1) {
        const newState = state.filter((state) => state.id !== action.payload);
        return newState;
      }
    },
    addToCart(state, action) {
      state.push(action.payload);
    },
  }, //state 수정 함수
});

export let { plusCount, minusCount, addToCart } = cart.actions; //모든 state 수정 함수

//state 등록해야 사용 가능
export default configureStore({
  reducer: {
    //작명 : state이름.reducer
    cart: cart.reducer,
  },
});
