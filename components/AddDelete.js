import React from "react";
import { useDispatch } from "react-redux";
import {
  addCartProduct,
  deleteAllFromCart,
  deleteCartProduct,
} from "../store/slices/products/productsSlice";

const AddDelete = ({ item, setItem }) => {
  const dispatch = useDispatch();
  const { id, quantity } = item;

  return (
    <>
      <div className="add-delete">
        <button
          className="add-delete__delete"
          onClick={(e) => dispatch(deleteCartProduct(id))}
        >
          -
        </button>
        <span className="add-delete__quantity">{quantity}</span>
        <button
          className="add-delete__add"
          onClick={(e) => dispatch(addCartProduct(id))}
        >
          +
        </button>
      </div>
    </>
  );
};

export default AddDelete;
