const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  img: { type: String, required: true },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
