# Voting Application

## Overview

This repository contains a voting application built using Node.js, Express, MongoDB, and Redis. The application allows users to create polls, vote on them, and retrieve poll results. The backend is structured to handle various operations related to poll management and voting.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Dependencies](#dependencies)
4. [API Endpoints](#api-endpoints)
5. [Configuration](#configuration)
6. [Setup and Installation](#setup-and-installation)
7. [Usage](#usage)

## Getting Started

These instructions will help you get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 14.x)
- [MongoDB](https://www.mongodb.com/) (instance URI required)
- [Redis](https://redis.io/) (instance details required)

## Project Structure

The project is organized as follows:

```
/setup
  |-- database.js       # Database connection setup
  |-- middleware.js     # Middleware setup
  |-- redis.js          # Redis connection setup
  |-- router.js         # API routes setup
/index.js               # Entry point of the application
```

## Dependencies

The project uses the following dependencies:

- `express`: A fast, minimalist web framework for Node.js
- `mongodb`: MongoDB driver for Node.js
- `redis`: Redis client for Node.js
- `uuid`: Package to generate unique identifiers
- `util`: Node.js utilities for promisifying Redis commands

## API Endpoints

### Create Poll

- **Endpoint:** `POST /polls`
- **Description:** Creates a new poll with a title and multiple choices.
- **Request Body:**
  ```json
  {
    "title": "Poll Title",
    "choices": ["Choice 1", "Choice 2", "Choice 3"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Poll Created",
    "pollId": "generated-poll-id",
    "data": {
      "_id": "generated-poll-id",
      "title": "Poll Title",
      "choice": [
        { "name": "Choice 1", "count": 0, "_id": "choice-id-1" },
        { "name": "Choice 2", "count": 0, "_id": "choice-id-2" },
        { "name": "Choice 3", "count": 0, "_id": "choice-id-3" }
      ]
    }
  }
  ```

### Vote

- **Endpoint:** `POST /polls/:poll/vote`
- **Description:** Registers a vote for a specific choice in a poll.
- **Request Body:**
  ```json
  {
    "choice": "choice-id",
    "ip": "user-ip-address"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Vote has been registered."
  }
  ```

### Get Poll

- **Endpoint:** `GET /polls/:poll`
- **Description:** Retrieves the details of a specific poll.
- **Response:**
  ```json
  {
    "_id": "poll-id",
    "title": "Poll Title",
    "choice": [
      { "name": "Choice 1", "count": 5, "_id": "choice-id-1" },
      { "name": "Choice 2", "count": 3, "_id": "choice-id-2" }
    ]
  }
  ```

## Configuration

Ensure you configure the following details in your environment:

- **MongoDB URI:** The connection string for your MongoDB instance.
- **Redis Host:** The hostname for your Redis instance.
- **Redis Port:** The port number for your Redis instance.
- **Redis Auth:** The authentication password for your Redis instance.

These settings are configured in `setup/redis.js` and `setup/database.js`.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anshitmishraa/voting-application.git
   cd voting-application
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:** Update the `setup/redis.js` and `setup/database.js` files with your Redis and MongoDB configurations.

4. **Start the application:**
   ```bash
   npm start
   ```

5. **The server will be running on `http://localhost:4000`.**

## Usage

- Use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to interact with the API endpoints.
- Create polls, vote, and fetch poll results using the defined API endpoints.
