import { createSelector } from '@reduxjs/toolkit';

export const pokemon = (state) => state.pokemon;

export const pokemonSelector = createSelector(
  pokemon,
  state => state
);

