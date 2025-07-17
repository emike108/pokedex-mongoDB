import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { pokemonTypeColors } from "./utils";
import Skeleton from "@mui/material/Skeleton";

export function PokemonEntry(props) {
  return props.isLoading ? (
    <Skeleton variant="rounded" height={200} width={150} />
  ) : (
    <Box
      gap={1}
      display="flex"
      flexDirection="column"
      sx={{
        padding: 1,
        backgroundColor: "white",
        border: "1px solid #182653",
        borderRadius: "8px",
        boxShadow: `${pokemonTypeColors[props.pokemon.type]} 6px 8px 7px`,
      }}
    >
      <Typography variant="h6">{props.pokemon.name}</Typography>
      <img src={props.pokemon.img} />
    </Box>
  );
}
