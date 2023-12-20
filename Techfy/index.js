const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//application
const app = express();

//middleware
app.use(express.json());

//db server
mongoose
  .connect("mongodb://localhost:27017/techfy")
  .then(() => {
    console.log("Db conneted");
  })
  .catch((err) => {
    console.log(err);
  });

//register endpoint
app.post("/register", (req, res) => {
  res.send("registered");
});

//login endpoint
app.post("/login", (req, res) => {
  res.send("logged in");
});
0;

//app server
app.listen(8500, () => {
  console.log("server running");
});
