import { useEffect } from 'react';
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
const GrillaPersonajes = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchCharactersThunk(""));
    }, []);
    const {characters,status} = useSelector((state) => state.personajes)


    if (status === "LOADING") return <div>Cargando personajes...</div>;
    if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
    if (!characters || characters.length === 0) return <></>;

    console.log(characters[0].name)
    return (
        <>
    <div className="grilla-personajes">
        <>
            {characters.map((item, index)=><TarjetaPersonaje name= {item.name} index= {item.index} image = {item.image}/>)}
        
</>
    </div>
    </>)
};
 
export default GrillaPersonajes;