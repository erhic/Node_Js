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
  { timestamps: true }
);

// Creating a model , to enable communication between database and schema data from our node server,
// takes the collection working on in database and the schema as arguments
const proModel = mongoose.model("products", prodSchema);

//Creating routes to get data, takes first argument as the route and additionally call back functions.
app.get("/products", (req, res) => {
  // console.log(req.body);
  // res.send({ message: "Getting all products successful" });
  proModel
    .find()
    .limit(2)
    .then((products) => {
      console.log(products);
    })
    .catch((err) => {
      console.log(err);
    });
});
//Creating routes to get data for single item
app.get("/product/:id/", (req, res) => {
  console.log(req.body);
  res.send({ message: "Single product retrieved successfuly" });

  proModel
    .findOne(req.body)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
// Creating a route to post or add resoources
app.post("/product", (req, res) => {
  let productToAdd = req.body;
  // console.log(req.body);
  // res.send({ message: "Added item successfuly" });
  proModel
    .create(productToAdd)
    .then((stream) => {
      console.log("item added successfully");
      res.send({ data: stream, message: "Product added successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});
// Creating an endpoint to update resources
app.put("/product/:id", (req, res) => {
  let product = req.body;

  proModel
    .updateOne({ _id: req.params.id }, product)
    .then((data) => {
      console.log("updated products");
      res.send({ message: "Product updated" });
    })
    .catch((err) => {
      console.log(err);
    });
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
