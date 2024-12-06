// TODO: 컨트롤러 코드
const User = require("../model/User");
exports.main = (req, res) => {
  res.render("index");
};

// sign-up page
exports.getSignup = (req, res) => {
  res.render("signup");
};

// sign-in page
exports.getSignin = (req, res) => {
  res.render("signin");
};

// sign-up post 회원가입
exports.postSignup = (req, res) => {
  User.postSignup(req.body, (result) => {
    res.send(result + "번 등록 완료");
    // result 는 배열 형태로 나옴
    // 콜백에서 넘어온 rows.insertId
    // 이제 이 result값으로 데이터 조회해서 로그인 성공 여부 확인 시키기
  });
};

// sign-in post 로그인 신규 회원 조회
exports.postSignin = (req, res) => {
  User.postSignin(req.body, (result) => {
    console.log("회원 ID", result);
    res.send(result);
  });
};
