import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFromCart } from "../store/slices/products/productsSlice";

const useCart = () => {
  const cart = useSelector((state) => state.products.cart).filter(
    (item) => item.quantity > 0
  );
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      let price = item.pricexu || item.price;

      total = total + price * item.quantity;
    });

    setTotal(total);
    if (total === NaN) {
      dispatch(deleteAllFromCart);
      localStorage.removeItem("PCCart");
    }
  }, [cart, dispatch]);

  return { cart, total };
};

export default useCart;
