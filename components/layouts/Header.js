import React from "react";
import ScrollIndicator from "../ScrollIndicator";
import Instagram from "../svg/Instagram";
import Whatsapp from "../svg/Whatsapp";

const Header = () => {
  return (
    <header className="header">
      <div className="header__background1"></div>
      <div className="header__background2"></div>
      <div className="header__content">
        <p className="header__desc1">NUESTROS PRODUCTOS TIENEN</p>
        <h1 className="header__title">
          LA MEJOR
          <br /> CALIDAD
        </h1>
        <p className="header__desc2">
          Porque tu hogar, merece los mejores productos del mar.
        </p>
        <a href="#products" className="btn btn--header">
          Ver Productos
        </a>
      </div>
      <div className="header__social">
        <a
          href="https://instagram.com/pescaderiacarenero"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram modifier="header-ig" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=584123899751&text=Hola%20Pescaderia%20Carenero!%20%F0%9F%90%9F"
          target="_blank"
          rel="noreferrer"
        >
          <Whatsapp modifier="header-ws" />
        </a>
      </div>
      <ScrollIndicator />
    </header>
  );
};

export default Header;
