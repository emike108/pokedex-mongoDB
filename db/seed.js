const mongoose = require('mongoose');
const db = require('./index.js');
const pokeData = require('../pokemon.json');
const Pokemon = require('./index.js');

function seed() {
  pokeData.map(pokemon => {
    const newEntry = new Pokemon(pokemon);
    newEntry.save(err => {
      if (err) {
        throw err;
      } else {
        console.log('pokemon successfully saved');
      }
    })
  })
}

