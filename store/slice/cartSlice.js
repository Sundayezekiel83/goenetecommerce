import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
  toggle: true,
};

const cartSlice = createSlice({
  name: "CartSlice",
  initialState,

  reducers: {
    toggleState: (action, state) => {
      state.toggle = !state.toggle;
    },
  },
});

export default cartSlice.reducer;

export const { toggleState } = cartSlice.actions;
