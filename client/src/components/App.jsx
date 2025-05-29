import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { fetchAll, fetchByType } from "../apiCalls.js";
import { PokemonList } from "./PokemonList.jsx";
import { pokemonTypes } from "./utils.js";

const allTypes = "All Types";

export function App() {
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);
  const [selectedPokemonType, setSelectedPokemonType] = useState("");
  const [isHelperTextRendered, setIsHelperTextRendered] = useState(false);

  async function handleButtonClick() {
    if (selectedPokemonType === "") {
      setIsHelperTextRendered(true);
      setPokemonsToDisplay([]);
      return;
    }
    setIsHelperTextRendered(false);

    if (selectedPokemonType === allTypes) {
      const pokemon = await fetchAll();
      setPokemonsToDisplay(pokemon);
      return;
    }

    const pokemon = await fetchByType(selectedPokemonType);
    setPokemonsToDisplay(pokemon);
  }

  function handleClearButton() {
    setPokemonsToDisplay([]);
    setSelectedPokemonType("");
    setIsHelperTextRendered(false);
  }

  function handleTypeSelection(event) {
    const { value } = event.target;
    setSelectedPokemonType(value);
  }

  return (
    <Stack alignItems="center">
      <Typography variant="h1">PokéDex!</Typography>
      <Box display="flex" gap="16px">
        <Button variant="contained" onClick={handleButtonClick}>
          View
        </Button>
        <FormControl width="150px">
          <Select
            id="type-selection"
            value={selectedPokemonType}
            onChange={handleTypeSelection}
            size="small"
            sx={{
              width: "100%",
            }}
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Select a Type</em>;
              }
              return selected;
            }}
          >
            {[allTypes, ...pokemonTypes].map((type, index) => {
              return (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button variant="outlined" onClick={handleClearButton}>
          Clear
        </Button>
        <Tooltip
          arrow
          title="Our PokeTrainers are exploring new lands, soon we will be able to add new Pokemons!!"
        >
          <Box display="flex">
            <Button variant="contained" disabled>
              Insert
            </Button>
          </Box>
        </Tooltip>
      </Box>
      <Box display="flex" padding="16px">
        {isHelperTextRendered ? (
          <Box>
            <Typography>Please select a type to render</Typography>
          </Box>
        ) : null}
        <PokemonList pokemons={pokemonsToDisplay} />
      </Box>
    </Stack>
  );
}
