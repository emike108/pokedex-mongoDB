const express = require("express");
const router = express.Router();
const Pokemon = require("../../db/models/pokemonSchema");

// GET all pokemon
router.get("/", async (_req, res) => {
  try {
    const pokemons = await Pokemon.find({});
    res.status(200).json(pokemons);
  } catch (err) {
    console.error("Error fetching pokemons", err);
    res.status(500).send("Server error");
  }
});

// GET pokemon by type
router.get("/:type", async (req, res) => {
  const { type } = req.params;
  try {
    const pokemons = await Pokemon.find({ type });
    res.status(200).json(pokemons);
  } catch (err) {
    console.error("Error fetching pokemons by type", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
