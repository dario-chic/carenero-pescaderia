import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCart from "../hooks/useCart";
import { addCartProduct } from "../store/slices/products/productsSlice";
import AddDelete from "./AddDelete";
import Stars from "./Stars";

const Product = ({ item }) => {
  const { cart } = useCart();
  const dispatch = useDispatch();

  return (
    <article className="product">
      <img className="product__img" src={item.img} alt={item.name} />
      <div className="product__content">
        <h4 className="product__title">{item.name}</h4>
        <span className="product__price">
          USD$ {parseFloat(item.pricexu || item.price).toFixed(2)}
          {item.pricexu ? <span>x Paquete Apróx.</span> : <span>xKg</span>}
        </span>
        <Stars />
        <p className="product__description">{item.description}</p>
        {cart.find((el) => el.id === item.id) ? (
          <AddDelete id={item.id} />
        ) : (
          <a
            href="#"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addCartProduct(item.id));
            }}
          >
            Agregar al Carrito
          </a>
        )}
      </div>
    </article>
  );
};

export default Product;
