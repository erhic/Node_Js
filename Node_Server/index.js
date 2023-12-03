// Importing HTTP Modules from node .
const http = require("http");

// creating API SERVER
http
  .createServer((req, res) => {
    console.log(req.status);
    console.log(res.end("end of the exuuuuuution"));
  })
  .listen(8000);
