import "./boton-favorito.css";
import { FC, MouseEventHandler } from "react";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * @param {boolean} esFavorito 
 * @param {MouseEventHandler} onClick función que agrega un personaje al listado de favoritos
 * @returns un JSX element
 *
 */
interface BotonFavoritoProps {
  esFavorito: boolean;
  onClick: MouseEventHandler;
}

const BotonFavorito: FC<BotonFavoritoProps> = ({ esFavorito, onClick }) => {
  const src = esFavorito ? "./imagenes/star-filled.png" : "./imagenes/star.png";

  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
  );
};

export default BotonFavorito;
