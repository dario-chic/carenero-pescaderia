import React from "react";

const Confirmation = ({ info }) => {
  return (
    <div className="confirmation">
      <div className="confirmation__info">
        <span className="confirmation__title">Nombre y Apellido</span>
        <p className="confirmation__data">{info.name}</p>
      </div>
      <div className="confirmation__info">
        <span className="confirmation__title">Número Telefónico</span>
        <p className="confirmation__data">{info.number}</p>
      </div>
      <div className="confirmation__info">
        <span className="confirmation__title">Detalles de Envío</span>
        <p className="confirmation__data">
          {info.delivery === "false" || !info.delivery
            ? "Recoge en Pick Up "
            : `${info.address}`}
        </p>
      </div>
      <div className="confirmation__info">
        <span className="confirmation__title">Mensaje Adicional</span>
        <p className="confirmation__data aditional">
          {info.msg === "" ? "No hay mensajes adicionales." : `"${info.msg}"`}
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
