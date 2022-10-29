import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useCart from "../hooks/useCart";
import {
  addCartProduct,
  deleteCartProduct,
} from "../store/slices/products/productsSlice";

const AddDelete = ({ id }) => {
  const { cart } = useCart();

  const [item, setItem] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    let itemInCart = cart.find((el) => el.id === id);
    if (itemInCart) setItem(itemInCart);
  }, [cart, item, id]);

  return (
    <>
      <div className="add-delete">
        <button
          className="add-delete__delete"
          onClick={(e) => {
            dispatch(deleteCartProduct(id));
            setItem({
              ...item,
              quantity: item.quantity <= 0 ? 0 : item.quantity - 1,
            });
          }}
        >
          -
        </button>
        <span className="add-delete__quantity">{item.quantity}</span>
        <button
          className="add-delete__add"
          onClick={(e) => {
            dispatch(addCartProduct(id));
            setItem({
              ...item,
              quantity: item.quantity > 0 && item.quantity + 1,
            });
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default AddDelete;
