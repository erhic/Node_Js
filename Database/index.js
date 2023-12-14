const mongoose = require("mongoose");

//conecting mongodb server
mongoose
  .connect("mongodb://localhost:27017//store-products")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

// creating the schema , the structure of data to insert to the collection (table as in sql)

const prodSchema = mongoose.Schema({
  name: String,
  quantity: Number,
});

// creating a model , an object that gives functionality to work on the collection. This program can't work directly on the collection hence model. it keeps connection between collection and schema

mongoose.model("products", prodSchema);

//performing operations

//dummy objects
let product = {
  name: "Milk",
  quantity: 3,
};

//1. inserting objects
