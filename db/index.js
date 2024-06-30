const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/pokedex", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch(() => console.log("error connecting database"));
