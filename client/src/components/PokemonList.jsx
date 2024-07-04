import React from "react";
import { PokemonEntry } from "./PokemonEntry.jsx";

export function PokemonList(props) {
  return (
    <div>
      {props.pokemons.map((pokemon, index) => (
        <PokemonEntry pokemon={pokemon} key={index} />
      ))}
    </div>
  );
}
