import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct } from "../store/slices/products/productsSlice";
import AddDelete from "./AddDelete";
import Stars from "./Stars";

const Product = (props) => {
  const [item, setItem] = useState(props.el);
  const { id, name, type, price, description, img, quantity } = item;
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let itemInCart = cart.find((el) => el.id === id);

    if (itemInCart) setItem(itemInCart);
  }, [cart, id, item]);

  return (
    <article className="product">
      <img className="product__img" src={img} alt={name} />
      <div className="product__content">
        <h4 className="product__title">{name}</h4>
        <span className="product__price">USD$ {price}</span>
        <Stars />
        <p className="product__description">{description}</p>
      </div>
      {item.quantity ? (
        <AddDelete quantity={item.quantity} id={id} />
      ) : (
        <a
          href="#"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addCartProduct(id));
          }}
        >
          Agregar al Carrito
        </a>
      )}
    </article>
  );
};

export default Product;
