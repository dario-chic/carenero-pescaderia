import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Separator from "./Separator";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";
import { addProducts } from "../store/slices/products/productsSlice";

const Catalogo = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    name: "",
    price: "true",
    type: "todos",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    helpHttp()
      .get("https://carenero-pescaderia.vercel.app/api/products")
      .then((products) => {
        if (!products.err) {
          dispatch(addProducts(products));
          setLoading(false);
          setError(false);
        } else {
          setError(true);
        }
      });
  }, [dispatch]);

  return (
    <section className="section section--catalogo" id="products">
      <div className="section__container catalogo">
        <h2 className="catalogo__title">CATALOGO DE PRODUCTOS</h2>
        <p className="catalogo__description">
          Aquí siempre encontraras la lista actualizada semanalmente de nuestros
          productos y sus precios (en dolares).
        </p>
        <Separator />
        <Filters setFilters={setFilters} filters={filters} />
        <Products
          products={products}
          filters={filters}
          loading={loading}
          err={error}
        />
      </div>
    </section>
  );
};

export default Catalogo;
