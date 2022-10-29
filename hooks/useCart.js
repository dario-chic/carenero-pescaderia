import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";

const useCart = () => {
  const cart = useSelector((state) => state.products.cart).filter(
    (item) => item.quantity > 0
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total = total + item.price * item.quantity));

    setTotal(total);
  }, [cart]);

  return { cart, total };
};

export default useCart;
