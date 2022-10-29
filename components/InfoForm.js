import React from "react";

const InfoForm = ({ info, setInfo, errors, setErrors }) => {
  const handleForm = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    setErrors({});
  };

  return (
    <form id="info-form" className="info-form">
      <label htmlFor="info-form__name">
        <input
          id="info-form__name"
          className="info-form__name"
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          value={info.name}
          onChange={handleForm}
          required
        />
        <span className="tag">Nombre y Apellido</span>

        <div className="info-form__messages">
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
      </label>
      {/* <label htmlFor="info-form__email">
        <input
          id="info-form__email"
          className="info-form__email"
          type="email"
          name="email"
          placeholder="Escribe tu correo"
          value={info.email}
          onChange={handleForm}
          required
        />
        <span className="tag">Correo Electrónico</span>
        <div className="info-form__messages">
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </label> */}
      <label htmlFor="info-form__number">
        <input
          id="info-form__number"
          className="info-form__number"
          type="number"
          name="number"
          placeholder="Escribe tu número de teléfono"
          value={info.number}
          onChange={handleForm}
          required
        />
        <span className="tag">Número Telefónico</span>
        <div className="info-form__messages">
          {errors.number && <span className="error">{errors.number}</span>}
        </div>
      </label>
      <label htmlFor="info-form__delivery">
        <select
          name="delivery"
          id="info-form__delivery"
          onChange={(e) => {
            setInfo({ ...info, delivery: e.target.value });
          }}
          defaultValue={info.delivery}
        >
          <option value={"false"}>Recoger en Pick Up</option>
          <option value={"true"}>Delivery A Domicilio</option>
        </select>

        <span className="tag">Tipo de Entrega</span>
      </label>
      {info.delivery == "true" && (
        <label htmlFor="info-form__address">
          <input
            id="info-form__address"
            className="info-form__address"
            type="text"
            name="address"
            placeholder="Detalla la dirección de la entrega"
            value={info.address}
            onChange={handleForm}
            required
          />

          <span className="tag">Dirección de la Entrega</span>
          <div className="info-form__messages">
            {errors.delivery && (
              <>
                <span className="error">
                  Por favor, indica la dirección de envío.
                </span>
                <span className="extra">
                  El delivery cuenta con costo adicional.
                </span>
              </>
            )}
          </div>
        </label>
      )}
      <label htmlFor="info-form__msg">
        <textarea
          id="info-form__msg"
          className="info-form__msg"
          name="msg"
          placeholder="Detalla información adicional relevante. (Opcional)"
          value={info.msg}
          onChange={handleForm}
        />
        <span className="tag">Mensaje Adicional (opcional)</span>
      </label>
    </form>
  );
};

export default InfoForm;
