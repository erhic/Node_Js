const os = require("os");

// callback functiion  , passing another function as an  argument
function myProfile(userOs) {
  console.log("last log 24 hours");
  userOs();
}

myProfile(function () {
  return console.log("You are using :" + os.platform());
});
