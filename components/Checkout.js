import Link from "next/link";

import React from "react";

import useCheckout from "../hooks/useCheckout";

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

const Checkout = () => {
  const {
    info,
    checkout,
    setCheckout,
    errors,
    loading,
    handleChange,
    handleCheckout,
  } = useCheckout(validationsForm);

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
                    handleChange={handleChange}
                    errors={errors}
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
                <span className="checkout__sign">Resumen del Pedido.</span>
                <CartList
                  btnFn={handleCheckout}
                  url="/checkout"
                  next={checkout === "a" ? "Siguiente" : "Realizar Pedido"}
                  loading={loading}
                />
              </div>
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
