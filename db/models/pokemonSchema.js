const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  img: { type: String, required: true },
});

// First parameter is the collection name, if the collection doesn't exist, it will be created
const Pokemon = mongoose.model("pokemons", pokemonSchema);

module.exports = Pokemon;
