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
        <div className="product__price">
          <div className="product__price-xkg">
            USD$ {parseFloat(item.price).toFixed(2)}
            <span>Precio x Kilo.</span>
          </div>
          {item.pricexu ? (
            <div className="product__price-xpack">
              USD$ {parseFloat(item.pricexu).toFixed(2)}
              <span>Precio Apróx. x Paquete.</span>
            </div>
          ) : (
            <p className="product__price-cliente">
              (Kilos definidos por el cliente)
            </p>
          )}
        </div>
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
