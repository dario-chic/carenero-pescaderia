import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";
import { deleteAllFromCart } from "../store/slices/products/productsSlice";
import CartList from "./CartList";
import Confirmation from "./Confirmation";
import InfoForm from "./InfoForm";
import Steps from "./Steps";
import Arrow from "./svg/Arrow";

const validationsForm = (form) => {
  let errs = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  // let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name.trim()) {
    errs.name = "Por favor, indica tu nombre.";
  } else if (!regexName.test(form.name.trim())) {
    errs.name =
      "Por favor, escribe un nombre valido. (Solo letras y espacios en blanco)";
  }

  if (form.number === "" || !form.number) {
    errs.number = "Por favor, indica tu número telefónico.";
  }

  // if (!form.email.trim()) {
  //   errs.email = "Por favor, indica tu correo.";
  // } else if (!regexEmail.test(form.email.trim())) {
  //   errs.email = "Por favor, coloca un correo válido.";
  // }

  if (form.delivery === "true") {
    if (form.address === "")
      errs.delivery = "Por favor, indica la dirección de envío.";
  }

  return errs;
};

// const msj = `
// ¡Hola, Pescadería Carenero! 👋
// %20%0a%20%0a

// Me gustaría hacer un pedido con los siguientes productos que elegí desde su catálogo online:
// %20%0a%20%0a

// ${cart
//   .map(
//     (item) =>
//       `🐟 *${item.name} (${item.quantity} unid.)* = $${
//         item.quantity * item.price
//       }%20%0a%20%0a`
//   )
//   .join("")}
// 💵 *Total Apróximado* = $${total}

// ${
//   info.msg &&
//   `%20%0a%20%0a*------------------------------*%20%0a%20%0a*INFORMACIÓN ADICIONAL:* ${info.msg}`
// }

// %20%0a%20%0a*------------------------------*%20%0a%20%0a

// 🏷 *Nombre:* ${info.name}\n\n
// %20%0a%20%0a
// 📞 *Número:* ${info.number}
// %20%0a%20%0a
// 🚛 *Detalles de Envío:* ${
//   info.delivery === "true" || info.delivery
//     ? `"${info.address}"`
//     : "Recoge en Pick Up"
// }

// %20%0a%20%0a*------------------------------*%20%0a%20%0a

// Eso sería todo ¡Gracias de antemano! Quedo pendiente a su respuesta para concretar y continuar con el pedido.
//   `;

const Checkout = () => {
  const cart = useSelector((state) => state.products.cart)
    .filter((item) => item.quantity > 0)
    .sort((a, b) =>
      parseInt(a.price * a.quantity) > parseInt(b.price * b.quantity) ? 1 : -1
    );
  const dispatch = useDispatch();
  const router = useRouter();

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
  const [errors, setErrors] = useState({
    name: "",
    number: undefined,
    delivery: false,
    address: "",
    msg: "",
  });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(``);

  const btn = useRef();

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total = total + item.price * item.quantity));

    setTotal(total);
  }, [cart]);

  useEffect(() => {
    let lsInfo = JSON.parse(localStorage.getItem("PCInfo"));
    if (lsInfo) setInfo(lsInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem("PCInfo", JSON.stringify(info));
  }, [info]);

  useEffect(() => {
    localStorage.setItem("PCCheckout", JSON.stringify(checkout));
  }, [checkout]);

  const handleCartList = (e) => {
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
      helpHttp()
        .get("https://s3.amazonaws.com/dolartoday/data.json")
        .then((res) => {
          usdToBs = res.USD.promedio;
          console.log(usdToBs);

          setMensaje(`¡Hola, Pescadería Carenero! 👋%20%0a%20%0a
Me gustaría hacer un pedido con los siguientes productos que elegí desde su catálogo online:
%20%0a%20%0a

${cart
  .map(
    (item) =>
      `🐟 *${item.name} (${item.quantity} unid.)* = $${
        item.quantity * item.price
      }%20%0a%20%0a`
  )
  .join("")}
💵 *Total Apróximado* = $${total}%20%0a%20%0a
${`💸 *Cambio a Bs* = ${(total * usdToBs).toFixed(2)}Bs`}


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
  `);
          setTimeout(() => {
            btn.current.click();
            localStorage.removeItem("PCInfo");
            localStorage.removeItem("PCCart");
            localStorage.removeItem("PCCheckout");
            dispatch(deleteAllFromCart());
            router.push("/checkout/success");
          }, 2000);
        });

      // setCheckout("c");
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="section section--checkout">
      <div className="section__container checkout">
        {checkout === "a" || "b" ? (
          <>
            {" "}
            <Link href="/#products">
              {checkout === "a" ? (
                <a href="#" className="checkout__back">
                  <Arrow />
                  Volver al Catalogo
                </a>
              ) : (
                <a
                  href="#"
                  className="checkout__back"
                  onClick={(e) => {
                    e.preventDefault();
                    setCheckout("a");
                  }}
                >
                  <Arrow />
                  Volver atrás
                </a>
              )}
            </Link>
            <Steps steps={checkout} />
            <div className="checkout__core">
              {checkout === "a" ? (
                <div className="checkout__form">
                  <span className="checkout__sign">
                    Información de Contacto
                  </span>
                  <InfoForm
                    info={info}
                    setInfo={setInfo}
                    errors={errors}
                    setErrors={setErrors}
                  />
                </div>
              ) : (
                <div className="checkout__confirmation">
                  <span className="checkout__sign">
                    Por favor, verifica tu información.
                  </span>
                  <Confirmation info={info} />
                </div>
              )}
              <div className="checkout__resume">
                <span className="checkout__sign">Resumen de la Compra</span>
                <CartList
                  btnFn={handleCartList}
                  url="/checkout"
                  next={checkout === "a" ? "Siguiente" : "Realizar Pedido"}
                  loading={loading}
                />
              </div>
              <a
                className="checkout__submit"
                href={`https://api.whatsapp.com/send?phone=584123899751&text=${mensaje}`}
                ref={btn}
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </>
        ) : (
          <p>xddd</p>
        )}
      </div>
    </section>
  );
};

export default Checkout;
