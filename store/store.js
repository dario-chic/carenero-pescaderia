import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/opencart/cartSlice";
import productsSlice from "./slices/products/productsSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
