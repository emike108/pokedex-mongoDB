const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const pokemonRoutes = require("./routes/pokemon");

const app = express();
const port = 3000;

const MONGO_URI = "mongodb://user:password@localhost:27017";

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

// Routes to handle API requests
app.use("/pokemon", pokemonRoutes);
