import React, { useState } from "react";
import { fetchAll, fetchByType } from "../apiCalls.js";
import { PokemonList } from "./PokemonList.jsx";

export function App() {
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);
  const [selectedPokemonType, setSelectedPokemonType] = useState("");
  const [isHelperTextRendered, setIsHelperTextRendered] = useState(false);

  async function handleButtonClick() {
    if (selectedPokemonType === "" || selectedPokemonType === "Sort by Type") {
      setIsHelperTextRendered(true);
      setPokemonsToDisplay([]);
      return;
    }
    setIsHelperTextRendered(false);

    if (selectedPokemonType === "Show All") {
      const pokemon = await fetchAll();
      setPokemonsToDisplay(pokemon);
      return;
    }

    const pokemon = await fetchByType(selectedPokemonType);
    setPokemonsToDisplay(pokemon);
  }

  function handleTypeSelection(event) {
    const { value } = event.target;
    setSelectedPokemonType(value);
  }

  return (
    <div>
      <div>
        <h1>Pokemon!</h1>
        <button onClick={handleButtonClick}>Show All</button>
        <select id="type" onChange={handleTypeSelection}>
          <option>Sort by Type</option>
          <option>Show All</option>
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
          {isHelperTextRendered ? (
            <div>
              <p>Please select a type to render</p>
            </div>
          ) : null}
          <PokemonList pokemons={pokemonsToDisplay} />
        </div>
      </div>
    </div>
  );
}
