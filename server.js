const express = require("express");
const fs = require("fs");
const port = 3000;

// get an instance of express to use
const app = express()

// allow express to parse json
app.use(express.json())

// assign a new endpoint for hello world on get
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// assign a new endpoint for POST
app.post("/", (req, res) => {
    console.log("POST: " + req.body.msg);
    res.send("Got a POST request");
});

// assign a new endpoint for PUT at /users
app.put("/user", (req, res) => {
    console.log("PUT: " + req.body.msg);
    res.send("Got a PUT request at /user");
});

// assign a new endpoint for DELETE at /users
app.delete("/user", (req, res) => {
    res.send("Got a DELETE request at /user");
});

// start server
app.listen(port, () => {
    console.log("Listening at http://localhost:3000");
})
