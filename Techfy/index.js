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
const userModel = require("./Models/userModel");

//register endpoint
app.post("/register", (req, res) => {
  // res.send("registered");
  let user = req.body;
  // res.send(user.password);

  //hash password
  bcrypt.genSalt(10, (err, salt) => {
    if (!err) {
      //if gensalt works fine  proceed to hash
      bcrypt.hash(user.password, salt, async (err, hpass) => {
        console.log(hpass);
        //update hashed password before sending in db
        user.password = hpass;
        //send data to db now
        try {
          let doc = await userModel.create(user);
          res.send({ message: "user registered" });
        } catch {
          (err) => {
            console.log(err);
          };
        }
      });
    }
  });
});

//login endpoint
app.post("/login", (req, res) => {
  // res.send("logged in");
  const userCredentials = req.header.authorization;
});

//app server
app.listen(8600, () => {
  console.log("server running");
});
