const User = require("../model/User");
// 따로 만들어 놓은 데이터 호출

// GET /user
exports.getUser = (req, res) => {
  // get 요청이 들어왔을 때 이와 같은 함수를 만들어 준다.
  console.log(User.userInfo()); // 객체값이 나옴
  // { realID: 'cocoa', realPw: 'qwer1234', name: '홍길동', age: 20 }
  const data = User.userInfo();
  // const data = { realID: "cocoa", realPw: "qwer1234", name: "홍길동", age: 20 };
  // res.render("user", {
  //   realID: User.userInfo().realID,
  //   realPw: User.userInfo().realPw,
  //   name: User.userInfo().name,
  //   age: User.userInfo().age,
  // });
  res.render("user", User.userInfo());
};
