// intialize our express app
const express = require("express"); // importing express module
const app = express(); // setting up (app variable) to be able to configure our application

///setting the port to listen to or monitor locally
const port = 3001;

//setting up the route , takes callback function with request and response object, response obj sends /return some string.
app.get("/", (req, res) => {
  res.send(`hello world from express `);
});
/// Stsrting server and  listening to port and logging a string with port number
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
