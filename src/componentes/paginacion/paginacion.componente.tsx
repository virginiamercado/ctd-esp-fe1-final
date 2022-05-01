import {FC} from 'react';
import './paginacion.css';

interface PaginacionProps {
    page: number
    setPage: (page:number)=>void
}
/**
 * Componente que contiene los botones para paginar
 * 
 * @returns un JSX element 
 */
const Paginacion:FC<PaginacionProps> = ({page, setPage}) => {


    return <div className="paginacion">
        <button disabled={false} onClick={()=> setPage(page - 1)} className={"primary"}>Anterior</button>
        <button disabled={false} onClick={()=> setPage(page + 1)} className={"primary"} >Siguiente</button>
    </div>
    
}

export default Paginacion;