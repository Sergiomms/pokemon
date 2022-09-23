import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { pokemonSelector, pokemonRequest } from "../../store/modules/pokemon";

import { Header } from "../../components/Header";
import { Home } from "../Home";
import { toUpperCaseFirstLetter, toLowerCaseAllLetters } from "../../utils/masks";
import { toast } from "react-toastify";

export function PagesContainer() {
  const { loadingPokemon, successPokemon, errorPokemon } =
    useSelector(pokemonSelector);
  const dispatch = useDispatch();
  const [pokeNumberOrName, setPokeNumberOrName] = useState(1);
  const [pokeName, setPokeName] = useState("");
  const [pokeId, setPokeId] = useState("");
  const [pokeStats, setPokeStats] = useState([]);
  const [pokeImgFront, setPokeImgFront] = useState("");

  function handleGetPokemon() {
    if(pokeNumberOrName === '') {
      toast.error("Please enter a valid name or number!")
    } else {
      dispatch(pokemonRequest(pokeNumberOrName))
    }
  };

  function handleClearStates() {
    setPokeImgFront("");
    setPokeName(toUpperCaseFirstLetter(""));
    setPokeId("");
    setPokeStats("");
  };

  // Get pokemon on page load
  useEffect(() => {
    dispatch(pokemonRequest(pokeNumberOrName))
  },[])

  // updates pokemon object
  useEffect(() => {
    console.log("Pokemon na pages container", successPokemon)
    if(successPokemon){
      setPokeImgFront(successPokemon.sprites.front_default);
      setPokeName(toUpperCaseFirstLetter(successPokemon.name));
      setPokeId(successPokemon.id);
      setPokeStats(successPokemon.stats);
      setPokeNumberOrName()
    } else handleClearStates()
  }, [successPokemon]);

  // Get next and previous pokemon
  useEffect(() => {
    if(Number(pokeId) > 898){
      setPokeId(1)
      dispatch(pokemonRequest(1))
    } else if(Number(pokeId) < 1) {
      setPokeId(1)
      dispatch(pokemonRequest(1))
    }
  }, [pokeId])

  const handler = {
    loadingPokemon: loadingPokemon,
    pokeName: pokeName,
    pokeId: pokeId,
    pokeStats: pokeStats,
    pokeImgFront: pokeImgFront,
    pokeNumberOrName: pokeNumberOrName,
    setPokeNumberOrName: (e) => setPokeNumberOrName(e),
    handleGetPokemon: () => handleGetPokemon(),
  }

  return (
    <>
      <Header />
      <Home handler={handler}/>
    </>
  );
}
