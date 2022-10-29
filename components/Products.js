import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Message from "./Message";

import Product from "./Product";
import Error from "./svg/Error";

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
      {loading ? (
        <Loader />
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((el, i) =>
          el.available ? <Product key={i} item={el} /> : false
        )
      ) : (
        <Message
          icon={<Error />}
          header="No se encontraron resultados"
          msg="Lo sentimos, no pudimos encontrar resultados para esta busquedad. Intente cambiando los parametros de busqueda o reiniciando la pagina."
        />
      )}
    </div>
  );
};

export default Products;
