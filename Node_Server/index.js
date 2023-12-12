// Importing HTTP Modules from node, an internal module from Node  .
const http = require("http");
const fs = require("fs");
const url = require("url");

// creating API SERVER using a create server function with async function

// Request component
// 1. Base address/ip 192.168.1.0
// 2. Route
// 3. Method , GET ,POST , PATCH, DELETE
// 4. Data
// 5. Headers

http
  .createServer((req, res) => {
    console.log(req.url);
    console.log(url.parse(req.url, true));
    let urlParam = url.parse(req.url, true);
    console.log(".......");
    let myProducts = fs.readFileSync("./products.json", "utf-8");
    if (
      urlParam.pathname == "/products" &&
      req.method == "GET" &&
      urlParam.query.id == undefined
    ) {
      console.log(typeof myProducts);
      res.end(myProducts);
    } else if (
      urlParam.pathname == "/products" &&
      req.method == "GET" &&
      urlParam.query.id != undefined
    ) {
      let prodArray = JSON.parse(myProducts);
      let fProduct = prodArray.find((produc) => {
        return produc.id == urlParam.query.id;
      });
      console.log(fProduct);
      if (fProduct != undefined) {
        // can't send product as a object and validate if query isnt there
        res.end(JSON.stringify(fProduct));
      } else {
        res.end(JSON.stringify({ message: "Product not found" }));
      }
    }
    // if (req.url === "/add" && req.method == "POST") {
    //   res.end("Added product");
    // } else if (req.url === "/users" && req.method == "GET") {
    //   fs.readFile("./products.json", "utf-8", (err, data) => {
    //     if (err == null) {
    //       res.end(data);
    //     } else {
    //       res.end("data error, cant acccess data ", err);
    //     }
    //   });
    // }
  })
  .listen(3020);
