import React from "react";
import Separator from "./Separator";
import Whatsapp from "./svg/Whatsapp";

const About = () => {
  return (
    <div id="info" className="section about">
      <h2 className="about__title">PESCADERÍA CARENERO</h2>
      <Separator />
      <p className="about__description">
        Somos una <strong>Pescadería Artesanal</strong> establecida en Higuerote
        que abre sus puertas a la venta de sus productos en La Capital
        (Caracas). Nuestra misión es brindarte los productos marinos más frescos
        y con la mejor calidad de todo el mercado.
        <br />
        <br />
        Todos nuestros productos son totalmente frescos, pescados directamente
        en el mar Higueroteño y procesado rigurosamente y con mucho cuidado por
        nuestros trabajadores experimentados.
      </p>
      <a
        className="btn ws"
        href={`https://api.whatsapp.com/send?phone=584123899751&text=¡Hola, Pescadería Carenero! 👋`}
        target="_blank"
        rel="noreferrer"
      >
        <Whatsapp modifier="ws-about" /> Contáctanos por Whatsapp
      </a>
    </div>
  );
};

export default About;
