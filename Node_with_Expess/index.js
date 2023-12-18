//Application dependecies
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Application object -to access all properties/methods
const app = express();

//middleware -will be used to handle post data or request body
const mdware = express.json();
app.use(mdware);

//Schema
const userShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Should have more than 2 characters"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//Model

//endpoints
//Registering a user

//app server
app.listen(7000, () => {
  console.log("Server started successfully");
});
