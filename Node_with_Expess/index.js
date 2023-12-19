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
const userShema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);
//Model
const userModel = mongoose.model("users", userShema);

//endpoints
//Registering a user
app.post("/register", (req, res) => {
  let user = req.body;

  //hashing password
  bcrypt.genSalt(10, (err, salt) => {
    if (!err) {
      bcrypt.hash(user.password, salt, (err, hspass) => {
        if (!err) {
          console.log(hspass);
          user.password = hspass;
          userModel
            .create(user)
            .then((doc) => {
              res
                .status(201)
                .send({ message: "User registered successfully!!!!" });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send({ message: "Some problem" });
            });
        }
      });
    }
  });
});

//Setting up login route -uses post method, we dont want to reveal user details in url
app.post("/login", (req, res) => {
  // res.send({ message: "logged in !!" });
  // console.log(req.body);
  let userCredentials = req.body;
  userModel
    .findOne({ email: userCredentials.email })
    .then((usr) => {
      if (usr !== null) {
        bcrypt.compare(
          userCredentials.password,
          usr.password,
          (err, results) => {
            if (results === true) {
              // res.send({ message: "Login successful" });

              //generate a token
              jwt.sign(
                { email: userCredentials.email },
                "Eritech",
                (err, token) => {
                  if (!err) {
                    res.send({ token: token });
                  } else {
                    res.send({ message: "Problem generating a token" });
                  }
                }
              );
            } else {
              res.status(401).send({ message: "Wrong password" });
            }
          }
        );
      } else {
        res.status(404).send({ message: "wrong email ,no user found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Some problem happened" });
    });
});
//Setting up a middleware
function validateToken(req, res, next) {
  let gntoken = req.headers.authorization.split(" ")[1];
  jwt.verify(gntoken, "Eritech", (err, data) => {
    if (!err) {
      console.log(data);
      next();
    } else {
      res.send({ message: "invalid token ,please login again" });
    }
  });
}

// securing endpoint with middleware
app.get("/users", validateToken, (req, res) => {
  res.send({ message: "user are available now" });
});
//app server
app.listen(7000, () => {
  console.log("Server started successfully");
});
