import './paginacion.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, } from 'react';
import { getCharacters } from "../../services/personaje.service";
import React from 'react';



/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({page, setPage}) => {


    return <div className="paginacion">
        <button disabled={false} onClick={()=> setPage(page - 1)} className={"primary"}>Anterior</button>
        <button disabled={false} onClick={()=> setPage(page + 1)} className={"primary"} >Siguiente</button>
    </div>
    
}

export default Paginacion;