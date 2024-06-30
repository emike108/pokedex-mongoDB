const express = require("express");
const path = require("path");
const Pokemon = require("../db/models/pokemon");
const db = require("../db/index.js");

const app = express();
const port = 4200;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/pokemon", async (_req, res) => {
  try {
    const pokemons = await Pokemon.find({});
    res.status(200).json(pokemons);
  } catch (err) {
    console.error("Error fetching pokemons", err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
