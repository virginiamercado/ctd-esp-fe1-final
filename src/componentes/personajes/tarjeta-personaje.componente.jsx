import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, fetchCharactersThunk } from '../../actions/actions';



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
    const dispatch = useDispatch();
    
    const onClickPersonaje= (item) => {
        dispatch(addToFavorites(item))
        console.log(item.name)
        console.log(item)
        console.log(favorites)
        props.esFavorito = true   
    }

    return <div className="tarjeta-personaje">
        <img src={props.image} alt={props.name}/>
        <div className="tarjeta-personaje-body">
            <span>{props.name}</span>
            <BotonFavorito esFavorito={false} onClick={() => onClickPersonaje(props.item)} item={props.item}/>
        </div>
    </div>
}

export default TarjetaPersonaje;