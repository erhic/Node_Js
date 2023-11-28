const fs = require("fs");
// let p = fs.writeFile(
//   "./products.txt",
//   "fridges \t oven \t dispenser \n milk \t yought \n flour",
//   (err) => {
//     console.log(err);
//   }
// );

// synchronous
// fs.readFileSync("./products.txt", "utf-8");
// console.log(products);

//asynchronous
let products = fs.readFile("./products.txt", "utf-8", (err, data) => {
  console.log(err);
  console.log(data);
});

fs.appendFile("./products.txt", "\n all items above are in stock", (err) => {
  console.log(err);
});

const os = require("os");

console.log(os.hostname());
console.log(os.platform());
console.log(os.freemem());
