import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../actions/actions";
import { FC, useState } from "react";
import Personaje from "../../types/personajes.types";
import { IRootState } from "../../store/store";

interface TarjetaPersonajeProps {
  item: Personaje;
  key: number;
  name: string;
  image: string;
}

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @param props
 * @returns un JSX element
 */

const TarjetaPersonaje: FC<TarjetaPersonajeProps> = (
  props: TarjetaPersonajeProps
) => {
  const { favorites } = useSelector((state) => state.personajes);
  const [marcarEstrella, setmarcarEstrella] = useState(
    favorites.find((favorito: Personaje) => favorito.id === props.item.id)
      ? true
      : false
  );
  const dispatch = useDispatch();

/**
 *  Función para gestionar a los favoritos: si es favorito, lo elimina de los favoritos. Si no es favorito, lo agrega y cambia el ícono de la estrella.
 * @returns void
 * */ 
  const onClickPersonaje = (item: Personaje) => {
    marcarEstrella
      ? dispatch(deleteFromFavorites(item))
      : dispatch(addToFavorites(item));
    setmarcarEstrella(!marcarEstrella);
  };

  return (
    <div className="tarjeta-personaje">
      <img src={props.image} alt={props.name} />
      <div className="tarjeta-personaje-body">
        <span>{props.name}</span>
        <BotonFavorito
          esFavorito={marcarEstrella}
          onClick={() => onClickPersonaje(props.item)}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
