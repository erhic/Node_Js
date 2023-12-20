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
//app server
app.listen(8500, () => {
  console.log("server running");
});
