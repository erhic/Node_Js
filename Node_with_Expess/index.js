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

// Database connecton
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

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
const userModel = mongoose.model("users", userShema);

//endpoints
//Registering a user
app.post("/register", (req, res) => {
  let user = req.body;

  //hashing pasword
  bcrypt.genSalt(10, (err, salt) => {
    if (!err) {
      bcrypt.hash(user.password, salt, (err, hspass) => {
        if (!err) {
          console.log(hspass);
          user.password = hspass;
          userModel
            .create(user)
            .then((doc) => {
              res.send({ message: "User registered successfully!!!!" });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }
  });
});
//app server
app.listen(7000, () => {
  console.log("Server started successfully");
});
