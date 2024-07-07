import React from "react";

export function PokemonEntry(props) {
  return (
    <div>
      <h3>{props.pokemon.name}</h3>
      <img src={props.pokemon.img} />
    </div>
  );
}
