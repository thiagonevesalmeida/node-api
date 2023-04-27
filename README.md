# Node-API Development

This is API development project that demonstrates how to create a simple REST API with NodeJs. It includes a set of CRUD (Create, Read, Update, Delete) endpoint operations for a user database. The API is designed to accept and return JSON data.

# Getting Started

To run this API on your local machine, please follow these instructions:

1. Clone the repository to your local machine
2. Install the dependencies by running <b>'npm install'</b>
3. Start the server by running <b>'npm start'</b>

# Dependencies

This project has the following dependencies:

- <b>'express'</b>: A Node JS web framework for building web applications.
- <b>'cors'</b>: allows Cross-Origin Resource Sharing between different domains.
- <b>'nodemon'</b> (devDependencies): A tool that helps to develop Node.js-based applications by automatically restarting the node application when file changes in the directory are detected.

# API Endpoints

This API has two endpoints:

## 1. GET and POST to '/api'

This endpoint returns all users in the database as an array of objects.

- <b>Method:</b> GET
- <b>Route:</b> /api
- <b>Response:</b> Returns an array of user objects

This endpoint creates a new user and adds it to the database.

- <b>Method:</b> POST
- <b>Route:</b> /api
- <b>Request Body:</b> Expects a JSON object containing user data
- <b>Response:</b> Returns a message "User Saved" and status code 201 if the user was successfully created.

## 2. GET, PUT, and DELETE to '/api/:id'

This endpoint returns the user with the specified ID.

- <b>Method:</b> GET
- <b>Route:</b> /api/:id
- <b>Response:</b> Returns the user object with the specified ID or a 404 error if the user is not found.

This endpoint updates the user with the specified ID.

- <b>Method:</b> PUT
- <b>Route:</b> /api/:id
- <b>Request Body:</b> Expects a JSON object containing the updated user data
- <b>Response:</b> Returns a message "User Updated" and status code 200 if the user was successfully updated, or a 404 error if the user is not found.

This endpoint deletes the user with the specified ID.

- <b>Method:</b> DELETE
- <b>Route:</b> /api/:id
- <b>Response:</b> Returns a message "User Deleted" and status code 200 if the user was successfully deleted, or a 404 error if the user is not found.

# Middleware

This API uses the <b>'express.json()'</b> middleware to parse incoming requests with JSON payloads.

# Database

The user database is stored in a directory on a separete file called <b>'db.js'</b>. The file exports an array of user objects with the following properties:

- <b>'id'</b> (number): A unique identifier for the user
- <b>'login'</b> (string): The user's login on GitHub
- <b>'avatar'</b> (string): The user's avatar on GitHub
- <b>'url'</b> (string): The user's url on GitHub

# Notes

- The <b>'POST'</b> endpoint automatically generates a unique ID for the new user.
- The <b>'GET'</b>, <b>'PUT'</b>, and <b>'DELETE'</b> endpoints expect the ID of the user to be passed as a route parameter.
- The <b>'GET'</b> endpoint also accepts optional query parameters name and city, which can be used to update the user's name and/or city.
- The <b>'DELETE'</b> endpoint uses the Array.filter() method to remove the user with the specified ID from the users array.
