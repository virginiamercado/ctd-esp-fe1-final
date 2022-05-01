 import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharactersThunk } from '../../actions/actions'
import { store } from '../../store/store';
 import './filtros.css';


const Filtros = ({searchedValue, onchangeFunction}) => {
  
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre"  value={searchedValue}  onChange={(e)=>{onchangeFunction(e.target.value)} } />
    </div>
}

export default Filtros;


