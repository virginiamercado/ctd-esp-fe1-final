import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { buscarPersonajesAPI } from "../services/personaje.service";
import { IRootState } from "../store/store";
import Personaje from "../types/personajes.types";

interface FetchCharactersPendingAction extends Action {
  type: "FETCH_CHARACTERS_PENDING";
  query: string;
}

interface FetchCharactersSuccessAction extends Action {
  type: "FETCH_CHARACTERS_SUCCESS";
  characters: Personaje[];
}

interface FetchCharactersFailedAction extends Action {
  type: "FETCH_CHARACTERS_FAILED";
  error: string;
}

const fetchCharactersPending: ActionCreator<FetchCharactersPendingAction> = (
  query: string
) => {
  return {
    type: "FETCH_CHARACTERS_PENDING",
    query: query
  };
};

const fetchCharactersSuccess: ActionCreator<FetchCharactersSuccessAction> = (
  characters: Personaje[]
) => {
  return {
    type: "FETCH_CHARACTERS_SUCCESS",
    characters: characters
  };
};

const fetchCharactersFailure: ActionCreator<FetchCharactersFailedAction> = (
  error: string
) => {
  return {
    type: "FETCH_CHARACTERS_FAILED",
    error: error
  };
};

export type CharacterActions =
  | ReturnType<typeof fetchCharactersPending>
  | ReturnType<typeof fetchCharactersSuccess>
  | ReturnType<typeof fetchCharactersFailure>;

interface FetchCharactersThunkAction
  extends ThunkAction<void, IRootState, unknown, CharacterActions> {}

  export const fetchCharactersThunk = (
    query: string
  ): FetchCharactersThunkAction => {
    return async (dispatch, getState) => {
      // Marcamos el state como loading
      dispatch(fetchCharactersPending(query));
      //
      try {
        const personajes: Personaje[] = await buscarPersonajesAPI(query);
        dispatch(fetchCharactersSuccess(personajes));
      } catch (e) {
        dispatch(fetchCharactersFailure(e));
      }
    };
  };
  