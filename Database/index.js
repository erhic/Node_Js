const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017//store-products")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
