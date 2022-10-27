import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    cart: [],
  },
  reducers: {
    addProducts: (state, products) => {
      state.products = [...products.payload];
    },
    getLSCart: (state, cart) => {
      state.cart = cart.payload;
    },
    addCartProduct: (state, id) => {
      let newItem = state.products.find((product) => product.id === id.payload);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      if (itemInCart) {
        state.cart = state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart = [...state.cart, { ...newItem, quantity: 1 }];
      }
      localStorage.setItem("PCCart", JSON.stringify(state.cart));
    },
    deleteCartProduct: (state, id) => {
      state.cart = state.cart.map((product) =>
        product.id === id.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      localStorage.setItem("PCCart", JSON.stringify(state.cart));
    },
    deleteAllFromCart: (state, id) => {
      state.cart = state.cart.filter((item) => item.id !== id.payload);

      // state.cart = state.cart.map((product) =>
      //   product.id === id.payload ? { ...product, quantity: 0 } : product
      // );

      localStorage.setItem("PCCart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addProducts,
  getLSCart,
  addCartProduct,
  deleteCartProduct,
  deleteAllFromCart,
} = productsSlice.actions;

export default productsSlice.reducer;
