import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct } from "../store/slices/products/productsSlice";
import AddDelete from "./AddDelete";
import Stars from "./Stars";

const Product = (props) => {
  const [item, setItem] = useState({});
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setItem(props.el);
  }, [props.el]);

  useEffect(() => {
    let itemInCart = cart.find((el) => el.id === item.id);

    if (itemInCart) setItem(itemInCart);
  }, [cart, item]);

  return (
    <article className="product">
      <img className="product__img" src={item.img} alt={item.name} />
      <div className="product__content">
        <h4 className="product__title">{item.name}</h4>
        <span className="product__price">
          USD$ {parseFloat(item.price).toFixed(2)}
          <span>xKg</span>
        </span>
        <Stars />
        <p className="product__description">{item.description}</p>
        {item.quantity ? (
          <AddDelete item={item} setItem={setItem} />
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
