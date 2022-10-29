import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";
import { deleteAllFromCart } from "../store/slices/products/productsSlice";
import useCart from "./useCart";

const useCheckout = (validationsForm) => {
  const { cart, total } = useCart();
  const [checkout, setCheckout] = useState(
    JSON.parse(localStorage.getItem("PCCheckout")) || "a"
  );
  const [info, setInfo] = useState(
    JSON.parse(localStorage.getItem("PCInfo")) || {
      name: "",
      number: "",
      delivery: false,
      address: "",
      msg: "",
    }
  );
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    let lsInfo = JSON.parse(localStorage.getItem("PCInfo"));
    if (lsInfo) setInfo(lsInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem("PCInfo", JSON.stringify(info));
  }, [info]);

  useEffect(() => {
    localStorage.setItem("PCCheckout", JSON.stringify(checkout));

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [checkout]);

  const handleChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!cart || cart.length === 0) return false;

    if (checkout === "a") {
      let errs = validationsForm(info);

      Object.keys(errs).length === 0
        ? setCheckout("b")
        : setErrors(validationsForm(info));
    }

    if (checkout === "b") {
      let usdToBs = 0;
      setLoading(true);

      await helpHttp()
        .get("https://s3.amazonaws.com/dolartoday/data.json")
        .then((res) => {
          usdToBs = res.USD.promedio;
        });

      let mensaje = `¡Hola, Pescadería Carenero! 👋%20%0a%20%0a
Me gustaría hacer un pedido con los siguientes productos que elegí desde su catálogo online:
%20%0a%20%0a

${cart
  .sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? 1 : -1))
  .map(
    (item) =>
      `🐟 *${item.name} (${item.quantity} unid.)* = $${
        item.quantity * item.price
      }%20%0a%20%0a`
  )
  .join("")}
💵 *Total Apróximado* = $${total}
${
  usdToBs && usdToBs > 0
    ? `%20%0a%20%0a💸 *Cambio a Bs* = ${(total * usdToBs).toFixed(2)}Bs`
    : ""
}


${
  info.msg &&
  `%20%0a%20%0a*------------------------------*%20%0a%20%0a*INFORMACIÓN ADICIONAL:* ${info.msg}`
}

%20%0a%20%0a*------------------------------*%20%0a%20%0a

🏷 *Nombre:* ${info.name}\n\n
%20%0a%20%0a
📞 *Número:* ${info.number}
%20%0a%20%0a
🚛 *Detalles de Envío:* ${
        info.delivery === "true" ? `"${info.address}"` : "Recoge en Pick Up"
      }

%20%0a%20%0a*------------------------------*%20%0a%20%0a

Eso sería todo ¡Gracias de antemano! Quedo pendiente a su respuesta para concretar y continuar con el pedido.
%20%0a%20%0a

https://www.pescaderiacarenero.com/
  `;
      setLoading(false);

      setTimeout(() => {
        localStorage.removeItem("PCInfo");
        localStorage.removeItem("PCCart");
        localStorage.removeItem("PCCheckout");
        dispatch(deleteAllFromCart());
        router.push("/checkout/success");
      }, 1000);

      window.open(
        `https://api.whatsapp.com/send?phone=584123899751&text=${mensaje}`,
        "_blank"
      );
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return {
    info,
    checkout,
    setCheckout,
    errors,
    loading,
    handleChange,
    handleCheckout,
  };
};

export default useCheckout;
