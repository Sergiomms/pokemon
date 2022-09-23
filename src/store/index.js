import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./modules/pokemon/reducer";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
})