// imported express library
const express = require("express");
// Creating an object of the instance
const app = express();
// creating a middleware to handle data .transforn our stream  data collected from chunks to json
const mdware = express.json();
