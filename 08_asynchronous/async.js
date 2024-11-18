function goMart() {
  console.log("마트에 갑니다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // 3초동안 고민하는 함수
    setTimeout(function () {
      console.log("고민 끝~");
      product = "콜라";
      price = 1500;
      resolve("구매 완료!");
      //   reject("구매 실패");
    }, 3000);
  });
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price}지불`);
}

// 실행함수
async function exec() {
  try {
    goMart();
    await pickDrink();
    pay();
  } catch (err) {
    console.log(err);
  }
  // .then((result) => {
  //   // pickDrink가 끝나고 나서 실행되는 작업
  //   pay();
  //   console.log("result?", result);
  //   //   result는 resolve로 전달된 값
  // })
  // .catch((err) => {
  //   console.log("err?", err);
  //   //   reject로 전달된 값
  // })
  // .finally(() => {
  //   console.log("집으로 돌아갑니다.");
  // });
}
let price, product;
exec();
