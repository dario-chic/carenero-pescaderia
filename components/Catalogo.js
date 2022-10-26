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

  const { name, price, type } = filters;

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get("http://localhost:3000/api/products")
      .then((products) => {
        dispatch(addProducts(products));
        setLoading(false);
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
        <Products products={products} filters={filters} loading={loading} />
      </div>
    </section>
  );
};

export default Catalogo;
