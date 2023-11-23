exports.area = (width) => width * width;
exports.perimeter = (width) => 4 * width;

//working with callback
console.log("Thursady");
console.log("today");
setTimeout(() => {
  console.log("fired third");
}, 2000);
setTimeout(() => {
  console.log("aftertommorow");
}, 3000);
setTimeout(() => {
  console.log("before Sunday");
}, 4000);

// working with promises
const myPromise = (dataPoint) => {
  return new Promise((resolve, reject) => {
    if (successfull) {
      resolve();
    } else if (unsuccessful) {
      reject();
    }
  });
};

//working with async await
const asyncFunc = async () => {
  const response = await fetch(`http://localhost:3003/`);
  const data = await response.json();
};

console.log(1);
console.log(2);

asyncFunc().then((data) => console.log(data));

console.log(3);
console.log(4);
