import { Reducer } from "@reduxjs/toolkit";
import { CharacterActions } from "../actions/actions";
import Personaje from "../types/personajes.types";

export interface PersonajesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  characters: Personaje[];
  errorMessage: string | null;
  favorites: Personaje[];
}

const initialState: PersonajesState = {
  status: "IDLE",
  characters: [],
  errorMessage: null,
  favorites: []
};

const personajesReducer: Reducer<PersonajesState, CharacterActions> = (
  state = initialState,
  action
): PersonajesState => {
  switch (action.type) {
    case "FETCH_CHARACTERS_PENDING":
      return {
        ...state,
        status: "LOADING",
        characters: [],
        errorMessage: null
      };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        status: "COMPLETED",
        characters: action.characters
      };
    case "FETCH_CHARACTERS_FAILED":
      return {
        ...state,
        status: "FAILED",
        errorMessage: action.error
      };
      case"ADD_FAV_CHARACTER":
      return {...state, favorites: [...state.favorites.filter(personaje => personaje.name !== action.payload.name),action.payload]};
      case "DELETE_FAV":
      return{...state, favorites:[]}
      default:
      return state;
  }
};


export default personajesReducer;
