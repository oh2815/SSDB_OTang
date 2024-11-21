function callPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name); // cb 대신에  resolve로 값 넘기기
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
  // reject 생략 가능
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    });
  });
}
// callPromise("kim")
//   .then(function (name) {
//     console.log(name + "반가워");
//     return backPromise("back");
//   })
//   .then(function (txt) {
//     console.log(txt + "을실행했구나");
//     return hellPromise();
//   })
//   .then(function (message) {
//     console.log("여기는 " + message);
//   });

// ------------------------------------------------

// async function execute() {
//   let ccc = await callPromise("kim");
//   console.log(ccc + "반가워");
//   let bbb = await backPromise("back");
//   console.log(bbb + "을 실행 했구나");
//   let hhh = await hellPromise("callback hell");
//   console.log("여기는 " + hhh);
// }

// execute();

 ------------------------------------------------

// 기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

// 콜백 함수 실행
// call("kim", function (name) {
//   console.log(name + " 반가워");
//   back(function (txt) {
//     console.log(txt + "를 실행했구나");
//     hell(function (msg) {
//       console.log("여기는 " + msg);
//     });
//   });
// });

function callPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // cb 대신 resolve로 값 넘기기
    }, 1000);
  });
}

function backPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellPromise() {
  // reject 생략 가능
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// then ~ catch
callPromise("kim")
  .then((result) => {
    console.log(result + " 반가워");
    return backPromise();
  })
  .then((txt) => {
    // txt = 이전 then의 리턴값 = "back"
    console.log(txt + "을 실행했구나");
    return hellPromise();
    // return "안녕하세요";
  })
  .then((msg) => {
    console.log("여기는 " + msg);
  });

//   async/await
async function execute() {
  const name = await callPromise("allie");
  console.log(name + "반가워");
  const back = await backPromise();
  console.log(back + "을 실행했구나");
  const hell = await hellPromise();
  console.log("여기는 " + hell);
}

execute();
