import axios from "axios";
import React, { useState } from "react";
import { PokemonList } from "./PokemonList.jsx";

export function App() {
  const [display, setDisplay] = useState([]);
  const [type, setType] = useState(""); //chatGPT caught that I had set this to an array, rather than a string

  function showAll() {
    axios
      .get("/pokemon")
      .then((results) => {
        if (type === "" || type === "Sort by Type") {
          setDisplay(results.data);
        } else {
          setDisplay(
            results.data.filter((eachPokemon) => eachPokemon.type === type)
          );
        }
        console.log(results.data);
      })
      .catch((err) => console.error(err));
  }

  function handleClick(Event) {
    const { value } = Event.target;
    setType(value);
    console.log(value);
  }

  return (
    <div>
      <div>
        <h1>Pokemon!</h1>
        <button onClick={showAll}>Show All</button>
        <select id="type" value={type} onChange={handleClick}>
          <option value="Sort by Type">Sort by Type</option>
          <option value="Grass">Grass</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Normal">Normal</option>
          <option value="Poison">Poison</option>
          <option value="Electric">Electric</option>
          <option value="Ground">Ground</option>
          <option value="Fighting">Fighting</option>
          <option value="Psychic">Psychic</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dragon">Dragon</option>
        </select>
        <button>INSERT</button>
        <div>
          <PokemonList pokemons={display} />
        </div>
      </div>
    </div>
  );
}
