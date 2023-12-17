import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

export const cartStore = configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
  },
});
