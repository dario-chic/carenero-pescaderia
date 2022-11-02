import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCart from "../hooks/useCart";
import { setCartIsActive } from "../store/slices/opencart/cartSlice";
import CartList from "./CartList";
import Cart from "./svg/Cart";
import Fish from "./svg/Fish";

const ProductCart = ({ modifier, scroll }) => {
  const cartIsActive = useSelector((state) => state.cart.cartIsActive);
  const dispatch = useDispatch();
  const { cart, total } = useCart();

  useEffect(() => {}, [cartIsActive]);

  const handleBar = (e) => {
    e.stopPropagation();
    if (cartIsActive) {
      dispatch(setCartIsActive(false));
      // document.body.classList.remove("navIsActive");
    } else {
      dispatch(setCartIsActive(true));
    }
  };

  useEffect(() => {
    if (!scroll) {
      dispatch(setCartIsActive(false));
    }
  }, [scroll, dispatch]);

  return (
    <>
      <div
        className={`cart ${modifier} ${cartIsActive ? "active" : "inactive"}`}
        onClick={handleBar}
      >
        {cart && cart.length > 0 && total > 0 ? (
          <div className="cart-fish" onClick={handleBar}>
            <Fish id="cart-fish__fish" />
            <span className="cart-fish__number">${total}</span>
          </div>
        ) : (
          false
        )}
        <Cart modifier="cart-svg" />
      </div>
      <div className="cart__products">
        <div
          className="cart__bg"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setCartIsActive(false));
          }}
        ></div>
        <div className="cart__products-bg"></div>
        <CartList
          btnFn={(e) => (total <= 0 ? e.preventDefault() : "")}
          url="/checkout"
          next="Realizar Pedido"
        />
      </div>
    </>
  );
};

export default ProductCart;
