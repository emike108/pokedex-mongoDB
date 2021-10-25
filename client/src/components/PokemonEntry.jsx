import React from 'react';

const PokemonEntry = (props) => (
  <div>
    <h3>{props.pokemon.name}</h3>
    <img src={props.pokemon.img} />
  </div>
);

export default PokemonEntry;