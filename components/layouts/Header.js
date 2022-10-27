import React from "react";
import ScrollIndicator from "../ScrollIndicator";

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
      <ScrollIndicator />
    </header>
  );
};

export default Header;
