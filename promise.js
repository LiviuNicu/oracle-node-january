const returnsAPromise = function (stringArg) {
  return new Promise((resolve, reject) => {
    if (typeof stringArg === "string") {
      setTimeout(function () {
        resolve(stringArg + " is a string");
      }, 3000);
    } else {
      reject("Not a string");
    }
  });
};

//ES5
returnsAPromise("test")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

returnsAPromise(1)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

//ES6 (asyc - await)
const checkPromise = async (str) => {
  try {
    const response = await returnsAPromise(str);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
checkPromise("TEST ASYNC");
checkPromise(2);
