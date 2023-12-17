// Imported express library
const express = require("express");
const { Schema, default: mongoose } = require("mongoose");
// Creating an object of the instance
const app = express();
// Creating a middleware to handle data .transforn our stream  data collected from chunks to json
const mdware = express.json();
app.use(mdware);
// Creating a connection to the database
mongoose
  .connect("mongodb://localhost:27017/store")
  .then(() => {
    console.log(" ___ Connection to Mongodb Successful ___");
  })
  .catch((err) => {
    console.log(err);
  });

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
app.get("/products", (req, res) => {
  console.log(req.body);
  res.send({ message: "Getting all products successful" });
});
//Creating routes to get data for single item
app.get("/product/:id/", (req, res) => {
  let product = req.params.id;
  console.log(product);
  res.send({ message: "Single product retrieved successfuly" });
});
// Creating a route to post or add resoources
app.post("/product", (req, res) => {
  let productToAdd = req.body;
  console.log(req.body);
  res.send({ message: "Added item successfuly" });
});
// Creating an endpoint to update resources
app.put("/product/:id", (req, res) => {
  let product = req.body.params;
  res.send({ message: "Product updated" });
});
// Creatinng an endpoint to delete resources
app.delete("/product/:id", (req, res) => {
  let product = req.body.params;
  res.send({ message: "producted deleted" });
});

//Creating Node server using express
let urlPort = 8000;
app.listen(urlPort, () => {
  console.log(`__:::: Server connected successfully on port :${urlPort}___`);
});
