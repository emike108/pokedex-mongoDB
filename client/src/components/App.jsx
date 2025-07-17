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
import pokeBackground from "../assets/img/pokeBackground.png";

const allTypes = "All Types";

export function App() {
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);
  const [selectedPokemonType, setSelectedPokemonType] = useState("");
  const [isHelperTextRendered, setIsHelperTextRendered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleButtonClick() {
    if (selectedPokemonType === "") {
      setIsHelperTextRendered(true);
      setPokemonsToDisplay([]);
      return;
    }
    setIsHelperTextRendered(false);

    if (selectedPokemonType === allTypes) {
      setIsLoading(true);
      const pokemon = await fetchAll();
      setPokemonsToDisplay(pokemon);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const pokemon = await fetchByType(selectedPokemonType);
    setPokemonsToDisplay(pokemon);
    setIsLoading(false);
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
    <Box
      sx={{
        backgroundImage: `url(${pokeBackground})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          paddingTop: "20px",
        }}
      >
        <Stack alignItems="center">
          <Typography
            className="pokemon-text"
            sx={{
              fontSize: "90px",
            }}
          >
            PokéDex!
          </Typography>
          <Box display="flex" gap="16px">
            <Button variant="contained" onClick={handleButtonClick}>
              View
            </Button>
            <FormControl sx={{ width: "150px" }}>
              <Select
                id="type-selection"
                value={selectedPokemonType}
                onChange={handleTypeSelection}
                size="small"
                sx={{
                  width: "100%",
                  background: "white",
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
            <Button
              variant="outlined"
              onClick={handleClearButton}
              sx={{
                backgroundColor: "lightblue",
              }}
            >
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
          <Box
            display="flex"
            padding="24px 0px"
            width="100%"
            justifyContent="center"
          >
            {isHelperTextRendered ? (
              <Box>
                <Typography
                  className="pokemon-text"
                  sx={{
                    fontSize: "32px",
                  }}
                >
                  Please select a Pokémon type to filter by
                </Typography>
              </Box>
            ) : (
              <PokemonList pokemons={pokemonsToDisplay} isLoading={isLoading} />
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
