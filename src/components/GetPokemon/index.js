import React, {useState, useEffect} from "react";
import axios from "axios";

export function GetPokemon() {

  const [pokemonName, setPokemonName] = useState('');
  const [pokemonNumber, setPokemonNumber] = useState(1);
  const [pokemonCall, setPokemonCall] = useState(null);
  const [pokeName, setPokeName] = useState('');
  const [pokeImage, setPokeImage] = useState('');

  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonCall}`;
  let pokeResponse = null;

  useEffect(() => {
    setPokemonCall(pokemonNumber);
  }, [pokemonNumber]);

  // pokemon call
  useEffect(() => {
    axios.get(pokemonUrl).then((res) => {

      pokeResponse = res.data;
      setPokeName(pokeResponse.name)
      setPokeImage(pokeResponse.sprites.front_default)
      console.log("DEBUG", pokeResponse);
      console.log("DEBUG", pokeResponse.name);
    })
  }, [pokemonUrl]);

  return (
    <div>
      chamou a get pokemon
      <p>{pokeName}</p>
      <img
        src={pokeImage}
        alt={`${pokeName}, image`}
      />
    </div>
  )
}
