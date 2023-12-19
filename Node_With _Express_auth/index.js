//dependencies
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//app
const app = express();
//midddleware
const mdware = express.json();
app.use(mdware);
//app-db connection
mongoose
  .connect("mongodb://localhost:27017/store")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
//schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [4, "Minimum length 5 characters"],
    },
  },
  { timestamps: true }
);
//model
const userModel = mongoose.model("accounts", userSchema);
app.post("/register", (req, res) => {
  // console.log("register successful");
  let userDetails = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    if (!err) {
      bcrypt.hash(userDetails.password, salt, (err, hshpass) => {
        if (!err) {
          userDetails.password = hshpass;
          userModel
            .create(userDetails)
            .then(() => {
              res.send({ message: "Registered successfully" });
            })
            .catch((err) => {
              res.send({ message: "Registration failed" });
            });
        }
      });
    }
  });
});
app.post("/login", (req, res) => {
  let userReqDetails = req.body;
  userModel
    .findOne({ email: userReqDetails.email })
    .then((userFrmDB) => {
      if (userFrmDB !== null) {
        bcrypt.compare(
          userReqDetails.password,
          userFrmDB.password,
          (err, result) => {
            if (result === true) {
              // res.status(200).send({ message: " login successful" });
              //generating a token
              jwt.sign(
                { email: userReqDetails.email },
                "Techproj",
                (err, token) => {
                  if (!err) {
                    res.send({ token: token });
                  } else {
                    res.send({ message: "Please try login again" });
                  }
                }
              );
            } else {
              res.status(404).send({ message: "Invalid password" });
            }
          }
        );
      } else {
        res.send({ message: "Email doesn't exist" });
      }
    })
    .catch((err) => {
      res.send({ message: "Error happened" });
    });
});

function verifyToken(req, res, next) {
  let gtoken = req.headers.authorization.split(" ")[1];
  jwt.verify(gtoken, "Techproj", (err, data) => {
    console.log(data);
    next();
  });
}

app.get("/products", verifyToken, (req, res) => {
  console.log("product are here");
  res.send({ message: "produucts accessible" });
});

///app-server
app.listen(6000, () => {
  console.log("server running");
});
