async function getAgeStatus() {
  //  above function with async is used to make promise asynchromous

  // this is a promise but sychronous
  const promis = new Promise(function (reject, resolve) {
    let age = " 30";
    if (age >= 30 || age === 30) {
      resolve(`Age is ${age} years`);
    } else {
      reject("Too young");
    }
  });
  return promis;
}

getAgeStatus()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
console.log("............");

//getting data from Api using fetch which return a promise , Asynchronous function

fetch("https://www.boredapi.com/api/activity")
  .then((data) => {
    console.log(data.status);
    return data.json();
  })
  .then((rs) => {
    console.log(rs);
  })
  .catch((err) => console.log(err));

// getting data using async and await to make asynchronous function , using try ..catch to handle errors

async function myCart() {
  // use try .. catch to handle error
  try {
    let products = await fetch(
      "https://datausa.io/ap/data?drilldowns=Nation&measures=Population"
    );
    let prodData = await products.json();
    console.log(prodData);
    console.log("...\\\\\\//////......");
  } catch (err) {
    console.log(err);
  }
}
myCart();
