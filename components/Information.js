import React from "react";
import Cart2 from "./svg/Cart2";
import Contact from "./svg/Contact";
import Delivery from "./svg/Delivery";
import Quality from "./svg/Quality";

const information = [
  {
    title: "Compra sin Registrarte",
    description:
      "Agrega productos al carrito, rellena tus datos en el formulario y compra sin necesidad de registrarte.",
    icon: <Cart2 modifier="info-icon" />,
  },
  {
    title: "Máxima Calidad",
    description:
      "Todos nuestros productos son totalmente frescos y procesados cuidadosamente de forma manual.",
    icon: <Quality modifier="info-icon" />,
  },
  {
    title: "Envío Gratuito",
    description:
      "Desde Higuerote hasta Caracas el envío es gratuito. El Delivery a domicilio tiene un costo adicional.",
    icon: <Delivery modifier="info-icon" />,
  },
  {
    title: "Atención Personalizada",
    description:
      "Brindamos la mejor atención a nuestros clientes. Si necesitas información comunicate con nosotros.",
    icon: <Contact modifier="info-icon" />,
  },
];

const Information = () => {
  return (
    <section className="section section--info" id="info">
      <div className="section__container info">
        {information.map((el, i) => (
          <article key={i} className="info">
            {el.icon}
            <div className="info__content">
              <span className="info__title">{el.title}</span>
              <p className="info__description">{el.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Information;
