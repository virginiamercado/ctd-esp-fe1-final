import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharactersThunk } from "../actions/actions";
import { useEffect, useState } from "react";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const { characters, status, inputSearch } = useSelector(
    (state) => state.personajes
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

    const onchangeFunction = async (searchedValue) => {
    dispatch(fetchCharactersThunk(searchedValue));
  };

  /**
   * Función que elimina el input de la barra de filtro.
   * @returns void
   * */
   const cleanSearchInput = () => {
    dispatch(fetchCharactersThunk(""));
  };

  useEffect(() => {
    dispatch(fetchCharactersThunk(inputSearch, page));
  }, [dispatch, page,]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={cleanSearchInput}>
          Limpiar filtro
        </button>
      </div>
      <Filtros
        searchedValue={inputSearch}
        onchangeFunction={onchangeFunction}
      />
      <Paginacion page={page} setPage={setPage} />
      <GrillaPersonajes characters={characters} status={status} />
      <Paginacion page={page} setPage={setPage} />
    </div>
  );
};

export default PaginaInicio;