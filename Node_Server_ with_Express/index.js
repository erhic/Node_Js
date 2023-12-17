// imported express library
const express = require("express");
// Creating an object of the instance
const app = express();
// creating a middleware to handle data .transforn our stream  data collected from chunks to json
const mdware = express.json();

//creating routes to get data, takes first argument as the route and additionally call back functions.
app.get("/products", () => {});
//creating routes to get data for single item
app.get("/product:id/", () => {});
//
