import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCart from "../hooks/useCart";
import CartList from "./CartList";
import Cart from "./svg/Cart";
import Fish from "./svg/Fish";

const ProductCart = ({ modifier, scroll }) => {
  const { cart, total } = useCart();
  const [cartIsActive, setCartIsActive] = useState(false);

  const handleBar = () => {
    if (cartIsActive) {
      setCartIsActive(false);
      // document.body.classList.remove("navIsActive");
    }
    if (!cartIsActive) {
      setCartIsActive(true);

      // document.body.classList.add("navIsActive");
    }
  };

  useEffect(() => {
    if (!scroll) setCartIsActive(false);
  }, [scroll]);

  return (
    <span
      className={`cart ${modifier} ${cartIsActive ? "active" : "inactive"}`}
    >
      {cart && cart.length > 0 && total > 0 ? (
        <div className="cart-fish" onClick={handleBar}>
          <Fish id="cart-fish__fish" />
          <span className="cart-fish__number">${total}</span>
        </div>
      ) : (
        false
      )}
      <Cart modifier="cart-svg" onClick={handleBar} />
      <div className="cart__products">
        <div className="cart__products-bg"></div>
        <CartList
          btnFn={(e) => (total <= 0 ? e.preventDefault() : "")}
          url="/checkout"
          next="Realizar Pedido"
        />
      </div>
    </span>
  );
};

export default ProductCart;
