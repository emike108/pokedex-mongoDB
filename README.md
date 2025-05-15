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
4. Start the server:
   ```
   cd ~
   npm start
   ```
5. Start webpack
   ```
   cd ~
   npm run webpack

<!-- How to  start and seed the database via Docker -->
   ```

## Usage

- Open your browser and go to `http://localhost:4200/` to view the application.
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
