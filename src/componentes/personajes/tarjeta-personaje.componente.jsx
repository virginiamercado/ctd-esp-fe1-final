import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, deleteAllFavorites, fetchCharactersThunk, deleteFromFavorites } from '../../actions/actions';
import { useState } from 'react';



/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = (props) => {
    const {favorites} = useSelector((state) => state.personajes)
    const [marcarEstrella, setmarcarEstrella] = useState(favorites.find((favorito) => favorito.id === props.item.id)? true : false)
    const dispatch = useDispatch();
    
    const onClickPersonaje= (item) => {
        marcarEstrella? dispatch(deleteFromFavorites(item)):
        dispatch(addToFavorites(item));
        setmarcarEstrella(!marcarEstrella)
    }
console.log(props.item.id)
    return <div className="tarjeta-personaje">
        <img src={props.image} alt={props.name}/>
        <div className="tarjeta-personaje-body">
            <span>{props.name}</span>
            <BotonFavorito esFavorito={marcarEstrella} onClick={() => onClickPersonaje(props.item)} item={props.item}/>
        </div>
    </div>
}

export default TarjetaPersonaje;