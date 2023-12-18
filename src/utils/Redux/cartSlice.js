import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
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

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decrementItemFromCart: (state, action) => {
      let item = state.items.find((item) => item.name === action.payload.name);

      if (item.qty > 1) {
        item.qty -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.name !== action.payload.name
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    emptyCart: (state, action) => {
      state.items.length = 0;
      localStorage.removeItem("cartItems");
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
