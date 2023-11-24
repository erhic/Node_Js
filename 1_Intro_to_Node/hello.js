//load http module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//create Http server
const server = http.createServer((req, res) => {
  //set http header with http status and content type
  res.writeHead(200, { "Content-Type": "text/plain" });
  //send the responseboddyy with 'hello word'
  res.end("heeelllooworld\n");
});

//print a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server listening at https://${hostname}:${port}/`);
});
