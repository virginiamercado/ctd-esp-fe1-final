import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersThunk } from '../../actions/actions';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */



const GrillaPersonajes = ({characters, status}) => {
    const dispatch = useDispatch();

    if (status === "LOADING") return <div>Loading .. </div>;
    if (status === "FAILED") return <div>No se pudieron cargar los personajes</div>;
    if (!characters || characters.length === 0) return <></>;


    return (
        <>
    <div className="grilla-personajes">
        <>
            {characters.map((item, index)=> (<TarjetaPersonaje item={item} key={index} name= {item.name} image = {item.image} />))}
        
</>
    </div>
    </>)
};
 
export default GrillaPersonajes;