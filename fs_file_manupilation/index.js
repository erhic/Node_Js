const fs = require("fs");
// let p = fs.writeFile(
//   "./products.txt",
//   "fridges \t oven \t dispenser \n milk \t yought \n flour",
//   (err) => {
//     console.log(err);
//   }
// );

let products = fs.readFileSync("./products.txt", "utf-8");
console.log(products);
