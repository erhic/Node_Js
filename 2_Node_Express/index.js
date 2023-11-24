const express = require("express");
const app = express();

const port = 3011;

app.get("/", (req, res) => {
  res.send(`<p><b>Today is a new day,...., response received!!</b></p>`);
});

app.listen(port, () => {
  console.log(`Serve running on port :http:/localhost/${port}`);
});
