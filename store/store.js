import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products/productsSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
