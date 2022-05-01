import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllFavorites } from '../actions/actions';

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const {favorites} = useSelector((state) => state.personajes);

    const dispatch = useDispatch();

    /**
     * Función que vacía el array de FAVORITOS
     * @returns void
     * */
    const onClickDeleteFavorites = () => {
        dispatch(deleteAllFavorites())
        alert("Favoritos eliminados")
    }
    
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => onClickDeleteFavorites()}>Eliminar favoritos</button>
        </div>
        <GrillaPersonajes characters={favorites}/>
        
    </div>
}

export default PaginaFavoritos;