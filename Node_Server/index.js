// Importing HTTP Modules from node .
const http = require("http");
const { url } = require("inspector");

// creating API SERVER
http
  .createServer((req, res) => {
    console.log(res.end("end of the exuuuuuution"));
    if (req.url === "/add") {
      res.end("Added data");
    } else if (req.url === "/post") {
      res.end("update data");
    }
  })
  .liste(3000);
