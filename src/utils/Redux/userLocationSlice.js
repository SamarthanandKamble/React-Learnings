import { createSlice } from "@reduxjs/toolkit";

const userLocationSlice = createSlice({
  name: "userLocationSlice",

  initialState: {
    coordinateX: null,
    coordinateY: null,
    placeId: null,
  },

  reducers: {
    coordX: (state, action) => {
      console.log("location slice coord X:", action.payload);
      state.coordinateX = action.payload;
    },
    coordY: (state, action) => {
      console.log("location slice coord Y:", action.payload);
      state.coordinateY = action.payload;
    },
    setPlaceId: (state, action) => {
      console.log("location slic :", action.payload);
      state.placeId = action.payload;
    },
  },
});

export const { coordX, coordY, setPlaceId } = userLocationSlice.actions;

export default userLocationSlice.reducer;
