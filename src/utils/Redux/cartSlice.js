import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    cartTotal: 10,
  },
  reducers: {
    addToCart: (state, action) => {
      let existingElement = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (existingElement) {
        existingElement.qty += 1;
      } else {
        state.items.push({
          name: action.payload.name,
          price: action.payload.price / 100,
          qty: 1,
        });
      }
    },
    decrementItemFromCart: (state, action) => {
      let item = state.items.find((item) => item.name === action.payload.name);

      if (item.qty > 1) {
        item.qty -= 1;
      } else {
        let newArr = state.items.filter(
          (item) => item.name !== action.payload.name
        );
        state.items = newArr;
      }
    },
    emptyCart: (state, action) => {
      state.items.length = 0;
    },
    cartTotal: (state) => {
      state.cartTotal = state.items.reduce(
        (acc, curr) => acc + curr.price * curr.qty,
        0
      );
      console.log("Bill : ", cartTotal);
    },
  },
});

export const { addToCart, decrementItemFromCart, emptyCart, cartTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
