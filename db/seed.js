//* Outdated file used to connect to MongoDB, now we are using Docker to run MongoDB
// const mongoose = require("mongoose");
// const Pokemon = require("./models/pokemon");
// const pokeData = require("../pokemon.json");

// mongoose
//   .connect("mongodb://127.0.0.1/pokedex", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(async () => {
//     console.log("MONGO CONNECTION OPEN!!");

//     await seedDatabase();

//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log(err.stack);
//     process.exit(1);
//   });

// async function seedDatabase() {
//   try {
//     await Pokemon.deleteMany({});
//     console.log("Deleted all Pokemon");

//     await Pokemon.insertMany(pokeData);
//     console.log("Inserted new Pokemon");
//   } catch (err) {
//     console.error("Error seeding database", err);
//   }
// }
