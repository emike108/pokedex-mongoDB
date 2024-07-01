import axios from 'axios';
import React, { useState } from 'react';
import { PokemonList } from './PokemonList.jsx';


export function App() {
  const [display, setDisplay] = useState([]);

  function showAll() {
    axios.get('/pokemon')
    .then(results => {
      console.log(results.data)
      setDisplay(results.data)
    })
    .catch(err => console.error(err))
  }

  return (
    <div>
      <div>
        <h1>Pokemon!</h1>
        <button onClick={showAll}>Show All</button>
        <select id="type">
          <option>Sort by Type</option>
          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
          <option>Normal</option>
          <option>Poison</option>
          <option>Electric</option>
          <option>Ground</option>
          <option>Fighting</option>
          <option>Psychic</option>
          <option>Rock</option>
          <option>Ghost</option>
          <option>Dragon</option>
        </select>
        <button>INSERT</button>
        <div>
          <PokemonList pokemons={display} />
        </div>
      </div>
    </div>
  )
}
