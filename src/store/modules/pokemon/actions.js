import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const pokemonRequest = createAsyncThunk(
  "pokemon/pokemonRequest",
  async (numberOrName, { rejectWithValue }) => {
    try {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${numberOrName}`;
      const response = await axios.get(pokemonUrl);
      
      return response.data;
    } catch (err) {
      if (err.response.status !== 200) {
        toast.error("Could not find your pokemon. Please try again.");
      }
      return rejectWithValue("request error");
    }
  }
);
