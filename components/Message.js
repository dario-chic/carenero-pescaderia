import Link from "next/link";
import React from "react";
import Whatsapp from "./svg/Whatsapp";

const Message = ({ icon, header, msg, ws = false, action = false }) => {
  return (
    <div className="message">
      {icon}
      <h3 className="message__header">{header}</h3>
      <p className="message__msg" dangerouslySetInnerHTML={{ __html: msg }}></p>
      {action && (
        <Link href={action.link}>
          <a
            href="#"
            className="btn catalogo"
            onClick={(e) => {
              if (document.querySelector(".cart")) {
                document.querySelector(".cart").classList.remove("active");
              }
            }}
          >
            {action.text}
          </a>
        </Link>
      )}

      {ws && (
        <a
          className="btn ws"
          href={`https://api.whatsapp.com/send?phone=584123899751&text=¡Hola, Pescadería Carenero! 👋`}
          target="_blank"
          rel="noreferrer"
        >
          <Whatsapp modifier="ws" /> Contáctanos por Whatsapp
        </a>
      )}
    </div>
  );
};

export default Message;
