import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavCheckout from "../components/layouts/NavCheckout";
import PageLayout from "../components/layouts/PageLayout";
import { getLSCart } from "../store/slices/products/productsSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLSCart(JSON.parse(localStorage.getItem("PCCart")) || []));
  }, [dispatch]);

  return (
    <PageLayout header={false} nav={<NavCheckout />}>
      <p>xddd</p>
    </PageLayout>
  );
}
