function callPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function backPromise(txt) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve(txt);
    }, 1000);
  });
}

function hellPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    });
  });
}

callPromise("kim")
  .then(function (name) {
    console.log(name + "반가워");
    return backPromise("back");
  })
  .then(function (txt) {
    console.log(txt + "을실행했구나");
    return hellPromise();
  })
  .then(function (message) {
    console.log("여기는 " + message);
  });
