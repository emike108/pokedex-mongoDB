const mongoose = require("mongoose");
const Pokemon = require("./db/models/pokemonSchema.js");
const pokemonArray = require("./pokemonData.js");
const MONGO_URI = "mongodb://user:password@localhost:27017";

mongoose.set("strictQuery", false);

mongoose
  .connect(`${MONGO_URI}/pokedex?authSource=admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    await Pokemon.deleteMany({}); // Clear collection if needed
    await Pokemon.insertMany(pokemonArray);
    console.log("Seeded!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1);
  });
