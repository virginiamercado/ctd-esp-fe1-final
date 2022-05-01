import { FC } from "react";
import "./filtros.css";

interface FiltrosProps {
  searchedValue: string,
  onchangeFunction:(query:string) => void
}

/**
  Componente barra filtro de búsqueda.
  @returns <FC> 
 */ 

const Filtros:FC<FiltrosProps> = ({ searchedValue, onchangeFunction }) => {
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={searchedValue}
        onChange={(e) => {
          onchangeFunction(e.target.value);
        }}
      />
    </div>
  );
};

export default Filtros;
