import Grid from "@mui/material/Grid";
import React from "react";
import { PokemonEntry } from "./PokemonEntry.jsx";

export function PokemonList(props) {
  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      {props.pokemons.map((pokemon, index) => (
        <Grid
          key={index}
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <PokemonEntry pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
