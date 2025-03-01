import { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../components/About";
import Catalogo from "../components/Catalogo";
import Information from "../components/Information";
import Nav from "../components/layouts/Nav";
import PageLayout from "../components/layouts/PageLayout";
import { getLSCart } from "../store/slices/products/productsSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLSCart(JSON.parse(localStorage.getItem("PCCart")) || []));
  }, [dispatch]);

  return (
    <PageLayout header={true} nav={<Nav />}>
      <About />
      <Information />
      <Catalogo />
    </PageLayout>
  );
}
