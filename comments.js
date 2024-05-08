// Create web server
// Create a route for POST /comments
// Create a route for GET /comments
// Create a route for GET /comments/:id
// Create a route for PUT /comments/:id
// Create a route for DELETE /comments/:id

// Path: app.js
// Import the comments.js file
// Use the comments.js file as a middleware
// Set the port to 3000

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const comments = require("./comments");

app.use(bodyParser.json());
app.use("/comments", comments);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});