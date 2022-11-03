import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import Product from "./Product";
import CartX from "./svg/CartX";
import Loader from "./Loader";
import useCart from "../hooks/useCart";

const CartList = ({ btnFn, url, next, loading = false }) => {
  const { cart, total } = useCart();

  return (
    <div className="cart-list">
      <div className="cart-list__products">
        {cart && cart.length > 0 ? (
          cart.map((el, i) =>
            el.quantity > 0 ? <Product key={i} item={el} /> : false
          )
        ) : (
          <Message
            icon={<CartX />}
            header="No hay productos en el carrito"
            msg="Para comprar, dirigete a nuestro catalogo y añade los productos de tu preferencia"
            action={{ link: "/#products", text: "Ir al Catálogo" }}
          />
        )}
      </div>
      <div className="cart-list__next">
        {loading ? (
          <Loader />
        ) : (
          <>
            <span className="cart-list__total">
              <span className="text">Total Apróx:</span>
              <span className="number">${total}</span>
            </span>
            <Link href={url}>
              <a
                className={`btn ${total <= 0 && "disabled"}`}
                href="#"
                disabled={total <= 0 && true}
                onClick={(e) => (total < 0 ? e.preventDefault() : btnFn(e))}
              >
                {next}
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CartList;
