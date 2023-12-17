// Imported express library
const express = require("express");
const { Schema, default: mongoose } = require("mongoose");
// Creating an object of the instance
const app = express();
// Creating a middleware to handle data .transforn our stream  data collected from chunks to json
const mdware = express.json();

//Creating Schema , construct of data to be sent to the database
const prodSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is mandatory"],
    },
    color: {
      type: String,
    },
    quantity: {
      type: Number,
      min: [1, "Quantity must be more than 1"],
    },
    category: {
      type: String,
      enum: ["Food", "Clothing", "Stationery"],
    },
  },
  { timestamp: true }
);

// Creating a model , to enable communication between database and schema data from our node server,
// takes the database working with and the schema as arguments
const proModel = mongoose.model("store", prodSchema);

//Creating routes to get data, takes first argument as the route and additionally call back functions.
app.get("/products", () => {});
//Creating routes to get data for single item
app.get("/product:id/", () => {});
// Creating a route to post or add resoources
app.post("/product", () => {});
// Creating an endpoint to update resources
app.put("/product", () => {});
// Creatinng an endpoint to delete resources
app.delete("/product", () => {});
