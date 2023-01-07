# Munch

Munch is a Node.js backend for a reservation application for restaurants to easily book a table.

## Prerequisites

Before you can run Munch, you'll need to have the following software installed:

- Node.js
- MySQL

## Setup

To set up Munch, follow these steps:

1. Clone the repository: `git clone https://github.com/Munch-Ydays/munch-back.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file with the following variables:
   - `DB_HOST`: the hostname for your MySQL database
   - `DB_USER`: the username for your MySQL database
   - `DB_PASSWORD`: the password for your MySQL database
   - `DB_DATABASE`: the name of the database that you want to use for Munch

## Running the server

To start the Munch server, run `npm start`. You can also use `npm run start:dev` to start the server in development mode, which will automatically restart the server when you make changes to the code.

## API documentation

You can view the API documentation for Munch at <http://localhost:3000/api-docs>.
