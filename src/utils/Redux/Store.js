import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userLocationReducer from "./userLocationSlice";

export const cartStore = configureStore({
  reducer: {
    cartSlice: cartReducer,
    userLocationSlice: userLocationReducer,
  },
});
