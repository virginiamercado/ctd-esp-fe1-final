import {combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import personajesReducer from "../reducers/personajesReducer";
import { createStore } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"


const rootReducer = combineReducers({
    personajes: personajesReducer
  });
  
  export type IRootState = ReturnType<typeof rootReducer>;
  export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  
  export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  