import React, { useEffect, useState } from "react";

import Product from "./Product";

const Products = ({ filters, products, loading }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { name, type, price } = filters;

  useEffect(() => {
    setFilteredProducts([]);
    const a = [...products].filter((el) => {
      if (!el.name.toLowerCase().includes(name.toLowerCase())) return false;

      if (type !== "todos") {
        if (el.type !== type) return false;
      }

      return true;
    });

    if (price === "true") {
      setFilteredProducts(
        a.sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? 1 : -1))
      );
    }
    if (price === "false") {
      setFilteredProducts(
        a.sort((a, b) => (parseInt(a.price) < parseInt(b.price) ? 1 : -1))
      );
    }
  }, [name, type, price, products]);

  return (
    <div className="products__container">
      {filteredProducts.map((el, i) =>
        el.available ? <Product key={i} el={el} /> : false
      )}
    </div>
  );
};

export default Products;
