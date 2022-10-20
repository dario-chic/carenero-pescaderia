import React from "react";
import Clock from "../svg/Clock";
import Instagram from "../svg/Instagram";
import Whatsapp from "../svg/Whatsapp";

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="footer__info-container">
        <div className="footer__contact">
          <span className="footer__title">Dirección</span>
          <p className="footer__text">
            509e C. Sanatorio del Ávila, Caracas 1071, Miranda. (Boleita)
          </p>
        </div>
        <div className="footer__contact">
          <span className="footer__title">Contacto</span>

          <a
            className="contact"
            href="https://api.whatsapp.com/send?phone=584123899751&text=Hola%20Pescaderia%20Carenero!%20%F0%9F%90%9F"
            target="_blank"
            rel="noreferrer"
          >
            <Whatsapp id="footer__icon" /> +58 412-3899751
          </a>
          <a
            className="contact"
            href="https://www.instagram.com/pescaderiacarenero/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram id="footer__icon" />
            @pescaderiacarenero
          </a>
        </div>
        <div className="footer__horario">
          <span className="footer__title">
            <Clock id="footer__icon" />
            8:00 am - 6:00 pm
          </span>
        </div>
      </div>
      <div className="footer__copyright">
        <span className="footer__pescaderia-carenero">
          © 2022 All right reserved, Pescaderia Carenero.
        </span>
        <span className="footer__dario-chic">
          Diseñado y Construido por{" "}
          <a
            className="footer__dario-chic link"
            href="https://www.dariochic.com"
            target="_blank"
            rel="noreferrer"
          >
            Dario Chic
          </a>
        </span>
      </div>
      <img
        className="footer__img"
        src="logo.svg"
        alt="pescaderia carenero's logo"
      />
    </footer>
  );
};

export default Footer;
