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

4. Spin up the MongoDB database using Docker and seed it with initial data:

   There are two methods to seed the database, both of which are valid:

   - docker via terminal + manual seed with node script
   - via docker-compose and automatic seeding

   - **Method 1: Using Docker via terminal and manual seeding**

     - Spin up your docker container via the terminal with the following command:
     - (Note, can add/remove the -d flag to run in detached mode if desired)

       ```
       docker run --name pokedexDB -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest
       ```

     - Seed the database with the following command in a separate terminal from the root of the project:
       ```
       node seedPokemon.js
       ```

   - **Method 2: Using Docker Compose**

     - You also have the option to spin up the MongoDB container using Docker Compose, which will automatically seed the database with initial data.
     - Run the following command from the root of the project:

       ```
       docker-compose up
       ```

     - This will start the MongoDB container and automatically seed the database with the initial data.
       - Note: You can stop the container with `docker-compose down` when you're done.

5. Start the server:

   In a terminal at the root of the project, run:

   ```
   npm start
   ```

6. Start webpack

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
- Search for a Pokemon by name.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (`git checkout -b feature/your-feature-name`).
Make your changes.
Commit your changes (`git commit -m 'Add some feature'`).
Push to the branch (`git push origin feature/your-feature-name`).
Open a pull request.
