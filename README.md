# Toolbox full stack code challenge

## Description

This is a technical test to demonstrate full stack knowledge creating an Express server with a React client.

## Table of Contents

- [Installation](#installation)
- [Docker](#docker)
- [Usage](#usage)
- [Tests](#tests)

## Installation

To install the necessary dependencies we must run the following command in the two folders; `/server` and `/client`.

It is also necessary that we have `nvm` installed globally to be able to use the corresponding engines.

It is important that you run these commands in a terminal with administrator permissions

```bash
# Install client dependencies
cd ./client && nvm install 16.17.1 && nvm use 16.17.1 && npm i

# Install server dependencies
cd ./server && nvm install 14.20.1 && nvm use 14.20.1 && npm i
```

### Run Server

```bash
cd ./server && npm run start
```

The server will be available on port `8080`.

### Build Client

```bash
cd ./server && npm run build
```

This will build the client in the `dist` directory.

## Docker

You can use docker compose to run both the client and the server. Run this command in root directory.

```bash
docker-compose up --build
```

## Usage

### Server

Get all files data:

```bash
curl -v -X GET "http://localhost:8080/files/data" -H "accept: application/json"
```

Get a specific file data:

```bash
curl -v -X GET "http://localhost:8080/files/data?fileName=test2.csv" -H "accept: application/json"
```

Get all files available:

```bash
curl -v -X GET "http://localhost:8080/files/list" -H "accept: application/json"
```

### Client

Open the generated build in the browser or use port `3000` if you used docker to view the client.

The client will consume the EPs specified above and will provide an interface to consume them.

## Tests

```bash
# Run Jest client tests
cd ./client && npm run test

# Run Mocha + Chai server tests
cd ./server && npm run test