import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCart = () => {
  const cart = useSelector((state) => state.products.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total = total + item.price * item.quantity));

    setTotal(total);
  }, [cart]);

  return;
};

export default useCart;
