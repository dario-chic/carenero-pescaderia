import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartIsActive: false,
  },
  reducers: {
    setCartIsActive: (state, option) => {
      // console.log(option.payload);
      state.cartIsActive = option.payload;
    },
  },
});

export const { setCartIsActive } = cartSlice.actions;

export default cartSlice.reducer;
