import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";
import Cart from "./svg/Cart";
import Fish from "./svg/Fish";

const ProductCart = ({ modifier }) => {
  const [total, setTotal] = useState(0);
  const [cartIsActive, setcartIsActive] = useState(false);
  const cart = useSelector((state) => state.products.cart);

  useEffect(() => {
    let total = 0;

    if (cart && cart.length > 0) {
      cart.forEach((el) => (total = total + el.price * el.quantity));
    }

    setTotal(total);
  }, [cart]);

  const handleBar = () => {
    if (cartIsActive) {
      setcartIsActive(false);
      document.body.classList.remove("navIsActive");
    }
    if (!cartIsActive) {
      setcartIsActive(true);

      document.body.classList.add("navIsActive");
    }
  };

  return (
    <span className={`cart ${modifier}`}>
      {cart && cart.length > 0 && total > 0 ? (
        <div className="cart-fish">
          <Fish id="cart-fish__fish" />
          <span className="cart-fish__number">${total}</span>
        </div>
      ) : (
        false
      )}
      <Cart modifier="cart-svg" onClick={(e) => console.log("xd")} />
      <div className="cart__products">
        <div className="cart__products-bg"></div>
        <CartList total={total} />
      </div>
    </span>
  );
};

export default ProductCart;
