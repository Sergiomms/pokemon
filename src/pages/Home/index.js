import React, { useEffect, useState } from "react";
import { HomeMobile } from "./Mobile";
import { HomeWeb } from "./Web";
import RealTimeDimensions from "../../utils/responsiviness/RealTimeDimensions"
import { pokemonRequest, pokemonSelector } from "../../store/modules/pokemon";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toUpperCaseFirstLetter } from "../../utils/masks";


export function Home() {
  const [width] = RealTimeDimensions();
  const isWeb = width >= 800 ? true : false;

  const { loadingPokemon, successPokemon, errorPokemon } =
    useSelector(pokemonSelector);
  const dispatch = useDispatch();
  const [pokeNumberOrName, setPokeNumberOrName] = useState(1);
  const [pokeName, setPokeName] = useState("");
  const [pokeId, setPokeId] = useState("");
  const [pokeStats, setPokeStats] = useState([]);
  const [pokeImgFront, setPokeImgFront] = useState("");

  function handleGetPokemon() {
    if (pokeNumberOrName === "") {
      toast.error("Please enter a valid name or number!");
    } else {
      dispatch(pokemonRequest(pokeNumberOrName));
    }
  };

  function getNextPokemon(){
    dispatch(pokemonRequest(Number(handler.pokeId) + 1))
  };

  function getPreviousPokemon() {
    dispatch(pokemonRequest(Number(handler.pokeId) - 1))
  };

  // Get pokemon on page load
  useEffect(() => {
    dispatch(pokemonRequest(pokeNumberOrName));
  }, []);

  // updates pokemon object
  useEffect(() => {
    console.log("Pokemon na home", successPokemon);
    if (successPokemon) {
      setPokeImgFront(successPokemon.sprites.front_default);
      setPokeName(toUpperCaseFirstLetter(successPokemon.name));
      setPokeId(successPokemon.id);
      setPokeStats(successPokemon.stats);
      setPokeNumberOrName(successPokemon.id);
    }
  }, [successPokemon]);

  // Get next and previous pokemon
  useEffect(() => {
    if (Number(pokeId) > 898) {
      setPokeId(1);
      setPokeNumberOrName(1);
      dispatch(pokemonRequest(1));
    } else if (Number(pokeId) < 1) {
      setPokeId(1);
      setPokeNumberOrName(1);
      dispatch(pokemonRequest(1));
    }
  }, [pokeId]);

  useEffect(() => {
    console.log("PokeNumberOrName", pokeNumberOrName);
    console.log("PokeID", pokeId);
  }, [pokeNumberOrName, pokeId]);

  const handler = {
    loadingPokemon: loadingPokemon,
    pokeName: pokeName,
    pokeId: pokeId,
    pokeStats: pokeStats,
    pokeImgFront: pokeImgFront,
    pokeNumberOrName: pokeNumberOrName,
    setPokeNumberOrName: (e) => setPokeNumberOrName(e),
    handleGetPokemon: () => handleGetPokemon(),
    getNextPokemon: () => getNextPokemon(),
    getPreviousPokemon: () => getPreviousPokemon(),
  };


  if (isWeb) {
    return <HomeWeb handler={handler}/>
  } else {
    return <HomeMobile  handler={handler}/>
  }
}