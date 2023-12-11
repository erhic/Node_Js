// Importing HTTP Modules from node, an internal module from Node  .
const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

// creating API SERVER using a create server function with async function

// Request component
// 1. Base address/ip 192.168.1.0
// 2. Route
// 3. Method , GET ,POST , PATCH, DELETE
// 4. Data
// 5. Headers

http
  .createServer((req, res) => {
    if (req.url === "/add" && req.method == "POST") {
      res.end("Added product");
    } else if (req.url === "/user" && req.method == "POST") {
      res.end("Added  users");
    } else if (req.url === "/users" && req.method == "GET") {
      fs.readFile("./products.json", "utf-8", (err, data) => {
        if (err == null) {
          res.end(data);
        } else {
          res.end("data error, cant acccess data ", err);
        }
      });
    }
  })
  .listen(3019);
