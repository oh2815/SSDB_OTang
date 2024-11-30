const User = require("../model/User");
// 따로 만들어 놓은 데이터 호출

// GET /user
exports.getUser = (req, res) => {
  // get 요청이 들어왔을 때 이와 같은 함수를 만들어 준다.
  console.log(User.userInfo()); // 객체값이 나옴
  res.render("user");
};
