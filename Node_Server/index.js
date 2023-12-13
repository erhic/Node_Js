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
    console.log(url.parse(req.url, true));
    console.log(".......");

    //getting rid and transforning url to use it get data using url module
    let urlParam = url.parse(req.url, true);

    //reading file synchronously
    let myProducts = fs.readFileSync("./product.json", "utf-8");

    //fetching all the products
    if (
      urlParam.pathname == "/products" &&
      req.method == "GET" &&
      urlParam.query.id == undefined
    ) {
      console.log(typeof myProducts);
      res.end(myProducts);
    } else if (
      //fetching a single product ,using query parameter
      urlParam.pathname == "/products" &&
      req.method == "GET" &&
      urlParam.query.id != undefined
    ) {
      //transforming the read file string data to object
      let prodArray = JSON.parse(myProducts);
      // using find array method to find the id matching that in query
      let fProduct = prodArray.find((produc) => {
        return produc.id == urlParam.query.id;
      });
      console.log(fProduct);
      // changing the found object into a string and if none found ,send a message
      if (fProduct != undefined) {
        res.end(JSON.stringify(fProduct));
      } else {
        res.end(JSON.stringify({ message: "Product not found" }));
      }

      //adding a product
    } else if (urlParam.pathname == "/products" && req.method == "POST") {
      console.log(req.method);
      //setting a variable to hold the stream /chunk
      let prdct = "";
      //data output here is binary, we are adding chunk here
      req.on("data", (chunk) => {
        prdct += chunk;
      });

      //data output here is string
      req.on("end", () => {
        //we read the file ,make it object and add our streamed data here and then transform the data again to string

        let fileAsArray = JSON.parse(myProducts);
        let prdAsArrayObj = JSON.parse(prdct);

        //adding a product as an objects in the file list of objects(array)
        fileAsArray.push(prdAsArrayObj);

        //updating the file by writing it , together with converting data to string and catching error and string message if product added successfully
        fs.writeFile("./product.json", JSON.stringify(fileAsArray), (err) => {
          if (err == null) {
            res.end(JSON.stringify({ message: "New file added successfuly" }));
          } else {
            res.end(JSON.stringify({ message: "Problem while adding data" }));
          }
        });
      });
    }

    //delete a file
    else if (req.method == "DELETE" && urlParam.pathname == "/products") {
      //changing string files in an array
      let fileArrayfrmStr = JSON.parse(myProducts);

      let index = fileArrayfrmStr.findIndex((prod) => {
        return prod.id == urlParam.query.id;
      });
      console.log(index);
      if (index !== -1) {
        fileArrayfrmStr.splice(index, 1);
        fs.writeFile(
          "./product.json",
          JSON.stringify(fileArrayfrmStr),
          (err) => {
            if (err == null) {
              res.end(JSON.stringify({ message: "File Deleted successfully" }));
            } else {
              res.end(JSON.stringify({ message: "Error while deleting file" }));
            }
          }
        );
      } else {
        res.end(JSON.stringify({ message: "Product to delete not found" }));
      }
    }
    //updating data
    else if ((req.method == "PUT", urlParam.pathname == "/products")) {
      let prod = "";

      // recording , storing data streams
      req.on("data", (chunk) => {
        prod += chunk;
      });

      // implement the logic here ,convert string data to object and vice-versa, use callbeck which is called when stream data is done
      res.on("end", () => {
        //transform  data to object to be able to add logic using JS language.
        let productsFile = JSON.parse(myProducts);
      });
    }
  })
  .listen(3021);
