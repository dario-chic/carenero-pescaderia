import React from "react";
import Search from "./svg/Search";

const Filters = ({ filters, setFilters }) => {
  return (
    <form className="filters">
      {/* <span className="filters__results">67 resultados.</span> */}
      <div className="filters__options">
        <label className="search-name" htmlFor="search-name">
          <Search modifier="search-icon" />
          <input
            id="search-name"
            className="filters__search-name"
            type="text"
            name="name"
            placeholder="Buscar..."
            onChange={(e) =>
              setFilters({ ...filters, [e.target.name]: e.target.value })
            }
          />
        </label>
        <select
          name="price"
          id=""
          onChange={(e) =>
            setFilters({ ...filters, [e.target.name]: e.target.value })
          }
        >
          <option value={true}>Ordernar por: Más barato a mas caro</option>
          <option value={false}>Ordernar por: Más caro a mas barato</option>
        </select>
        <select
          name="type"
          id=""
          onChange={(e) =>
            setFilters({ ...filters, [e.target.name]: e.target.value })
          }
        >
          <option value="todos">Ver: Todos</option>
          <option value="enteros">Ver: Enteros</option>
          <option value="ruedas">Ver: Ruedas</option>
          <option value="filetes">Ver: Filetes</option>
          <option value="churrascos">Ver: Churrascos</option>
          <option value="lomos">Ver: Lomos</option>
          <option value="otros">Ver: Otros</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
