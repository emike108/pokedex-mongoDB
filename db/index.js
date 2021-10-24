const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/pokedex', { useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => console.log('monogDB connected'))
  .catch(() => console.log('error connecting database'))

let pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  img: String
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;