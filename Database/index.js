const mongoose = require("mongoose");

//conecting mongodb server,add the name of database while working with local db
mongoose
  .connect("mongodb://localhost:27017/store")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

// creating the schema , the structure of data to insert to the collection (table as in sql)

const prodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is mandatory"],
      minLength: [3, "Minimum length is 3"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is mandatory"],
      min: [3, "Minimum value is 3"],
    },
    category: {
      type: [String],
      enum: ["fruit", "dairy"],
    },
  },
  { timestamps: true }
);

// creating a model , an object that gives functionality to work on the collection. This program can't work directly on the collection hence model. it keeps connection between collection and schema

const prodModel = mongoose.model("products", prodSchema);

//performing operations

//dummy objects
let product = {
  name: "ice",
  quantity: 4,
  category: "dairy",
};

//1. inserting objects , use model
// prodModel
//   .create(product)
//   .then((data) => {
//     console.log(data);
//     console.log("Data inserted succesfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//2. fetching data ,using find method
// prodModel
//   .find({ name: "Milk" })
//   .sort({ quantity: -1 })
//   .limit(1)
//   .then((data) => {
//     console.log(data);
//     console.log("data fetched succesfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// prodModel
//   .deleteOne({ name: "honey" })
//   .then((info) => {
//     console.log(info);
//     console.log("Record deleted successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//updating a  resource , can update one or many
prodModel
  .updateMany({ name: "ice" }, { quantity: 70 })
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
