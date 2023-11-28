const os = require("os");

function myProfile(userOs) {
  console.log("last log 24 hours");
  userOs();
}

myProfile(function () {
  return console.log("You are using :" + os.platform());
});
