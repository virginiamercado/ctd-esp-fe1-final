import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../services/personaje.service";
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
  const { characters, status, favorites, inputSearch } = useSelector(
    (state) => state.personajes
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const cleanSearchInput = () => {
    dispatch(fetchCharactersThunk(""));
  };

  const onchangeFunction = async (searchedValue) => {
    dispatch(fetchCharactersThunk(searchedValue));
  };
  useEffect(() => {
    dispatch(fetchCharactersThunk(inputSearch, page));
  }, [dispatch, page]);

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

/* 
    const [state, setState] = useState({})

    state ={ data: [], next: "", previous: ""}


    getCharacters 
    const nextPage = () =>  {
        const { data,next, previous} = res.data; 
    axios.get(next) 
    .then(r => setState({data:results, next, previous}) )}
    

    axios.get("https://rickandmortyapi.com/api/character")
    .then( res => {
        const { data,next, previous} = res.data;
        setState({data:results, next, previous})}
    ) */
