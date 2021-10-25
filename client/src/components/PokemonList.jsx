import React from 'react';
import PokemonEntry from './PokemonEntry.jsx';


const PokemonList = (props) => (
  <div>
    {props.pokemons.map((pokemon, index) => (
    <PokemonEntry pokemon={pokemon} key={index}/>
    ))}
  </div>
)

export default PokemonList;
