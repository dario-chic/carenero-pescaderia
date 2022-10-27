import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const CartList = ({ total }) => {
  const cart = useSelector((state) => state.products.cart);

  return (
    <div className="cart-list">
      <div className="cart-list__products">
        {cart.map((el, i) =>
          el.quantity > 0 ? <Product key={i} el={el} /> : false
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-list__next">
          <span className="cart-list__total">
            Total:
            <span>${total}</span>
          </span>
          <Link href="/checkout">
            <a
              className={`btn ${total <= 0 && "disabled"}`}
              href="#"
              disabled={total <= 0 && true}
              onClick={(e) => (total <= 0 ? e.preventDefault() : "")}
            >
              Realizar Pedido
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartList;
