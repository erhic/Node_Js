//using timer to set asynchronous function
console.log("no 1");
console.log("no 2");
console.log("no 3");
setTimeout(function () {
  console.log("no 4");
}, 4000);
setTimeout(function () {
  console.log("no 5");
}, 2000);

console.log("no 6");
console.log("no 7");
