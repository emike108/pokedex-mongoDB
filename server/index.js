const express = require("express");
const path = require("path");
// Import the mongoose module to connect to MongoDB
const mongoose = require("mongoose");
const Pokemon = require("../db/models/pokemonSchema");

const app = express();
const port = 3000;

const MONGO_URI =
  "mongodb://user:password@localhost:27017/pokedex?authSource=admin";

mongoose.set("strictQuery", false);
// Connect to MongoDB using mongoose, start the server after successful connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

// Define a route handler for the default home page
app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// Route that goes through the server to get to the database
app.get("/pokemon", async (_req, res) => {
  try {
    const pokemons = await Pokemon.find({});
    res.status(200).json(pokemons);
  } catch (err) {
    console.error("Error fetching pokemons", err);
    res.status(500).send("Server error");
  }
});

//TODO: Create or replace the home route with route that pulls data from the database
