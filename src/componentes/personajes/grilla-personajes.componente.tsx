import { FC } from 'react';
import Personaje from '../../types/personajes.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 *  * 
 * @returns Componentes TarjetaPersonaje por cada personaje. En caso de existir un filtro, devuelve los personajes según ese filtro.
 */

interface GrillaPersonasProps{
    characters: Personaje[],
    status: string
}

const GrillaPersonajes:FC<GrillaPersonasProps> = ({characters, status}) => {

    if (status === "LOADING") return <div>Loading ... </div>;
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