async function getAgeStatus() {
  //  above function with async is used to make promise asynchromous

  // this is a promise but sychronous
  const promis = new Promise(function (reject, resolve) {
    let age = " 30";
    if (age >= 30) {
      console.log("Age is above");
    } else {
      console.log("Too young");
    }
  });
}

getAgeStatus();
