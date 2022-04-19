import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";

import { useState } from "react";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    /* const [state, setState] = useState({})

    state ={ data: [], next: "", previous: ""}

    nextPage = () =>  {
        const { data,next, previous} = res.data; 
    axios.get(next) 
    .then(r => setState({data:results, next, previous}) )}
    

    axios.get("https://rickandmortyapi.com/api/character")
    .then( res => {
        const { data,next, previous} = res.data;
        setState({data:results, next, previous})}
    )} */





    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Limpiar filtro</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio