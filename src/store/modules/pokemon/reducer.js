import { createReducer } from "@reduxjs/toolkit";
import {
  pokemonRequest
} from "./actions";


const initialState = {
  loadingPokemon: false,
  successPokemon: false,
  errorPokemon: false,
};


export const pokemonReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(pokemonRequest.pending, (state) => {
    state.loadingPokemon = true;
    state.successPokemon = false;
    state.errorPokemon = false;
  })
  .addCase(pokemonRequest.fulfilled, (state, { payload }) => {
    state.loadingPokemon = false;
    state.successPokemon = payload;
    state.errorPokemon = false;
  })
  .addCase(pokemonRequest.rejected, (state) => {
    state.loadingPokemon = false;
    state.successPokemon = false;
    state.errorPokemon = true;
  })
})

