import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../../components/Checkout";
import NavCheckout from "../../components/layouts/NavCheckout";
import PageLayout from "../../components/layouts/PageLayout";
import Loader from "../../components/Loader";
import { helpHttp } from "../../helpers/helpHttp";
import {
  addProducts,
  getLSCart,
} from "../../store/slices/products/productsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let lsCart = JSON.parse(localStorage.getItem("PCCart")) || [];
    dispatch(getLSCart(lsCart));
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get("https://www.pescaderiacarenero.com/api/products")
      .then((products) => {
        dispatch(addProducts(products));
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      let filtered = cart.filter((item) => item.quantity > 0);

      if (filtered && filtered.length <= 0) {
        // router.push("/");
      }
    }
  }, [cart, router, loading]);

  return (
    <PageLayout header={false} nav={<NavCheckout />}>
      {loading ? <Loader modifier="checkout-loader" /> : <Checkout />}
    </PageLayout>
  );
}
