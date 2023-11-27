const items = [
  { name: "wheat flour", price: 139, unit: "2kg" },
  { name: "Shoes", price: 2000, color: "black" },
  { name: "Milk", price: 100 },
];
console.log(items[1]);

const myCart = (items) => {
  return console.log(items + "...");
};

myCart();

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise.then((data) => {
  console.log(".......");
  console.log(data.status);
});

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
