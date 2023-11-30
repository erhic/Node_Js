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
