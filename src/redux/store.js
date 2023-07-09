import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart", //state 이름
  initialState: [
    { id: 6, name: "White and Black", count: 2 },
    { id: 7, name: "Grey Yordan", count: 1 },
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
        //한 개 남았을 때 마이너스시 제품 삭제
        const newState = state.filter((state) => state.id !== action.payload);
        return newState;
      }
    },
    addToCart(state, action) {
      let index = state.findIndex((a) => {
        return a.id == action.payload.id;
      });

      if (index == -1) {
        //장바구니에 같은 상품이 없을 때
        state.push(action.payload);
      } else {
        //장바구니에 같은 상품이 있을 때
        state[index].count++;
      }
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
