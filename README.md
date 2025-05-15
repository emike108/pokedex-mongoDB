# Pokedex MongoDB

A Pokedex application built with MongoDB, Express, React, and Node.js (MERN stack).

## Table of Contents

- [Pokedex MongoDB](#pokedex-mongodb)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/<your_username>/pokedex-mongoDB.git
   cd pokedex-mongoDB
   ```

2. Install dependencies for the server:

   ```
   cd server
    npm install
   ```

3. Install dependencies for the client:

   ```
    cd ../client
    npm install
   ```

4. Spin up the MongoDB database using Docker:

   In a terminal at the root of the project, run:
   (Note, can add/remove the -d flag to run in detached mode if desired)

   ```
   docker run -d --name pokemonDB -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest

   ```

5. Seed the database:

   In a terminal at the root of the project, run:

   ```
   node seedPokemon.js
   ```

   This will populate the database with sample Pokemon data

6. Start the server:

   In a terminal at the root of the project, run:

   ```
   npm start
   ```

7. Start webpack

   In a separate terminal at the root of the project, run:

   ```
   npm run webpack
   ```

## Usage

- Open your browser and go to `http://localhost:3000/` to view the application.
- Use the `select` component to show/filter the list of Pokemon.

## Features

- View a list of Pokemon.
- Filter Pokemon by type.
- View details of a Pokemon.
- Add a Pokemon to the Pokedex.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (`git checkout -b feature/your-feature-name`).
Make your changes.
Commit your changes (`git commit -m 'Add some feature'`).
Push to the branch (`git push origin feature/your-feature-name`).
Open a pull request.
