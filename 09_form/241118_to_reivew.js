const express = require("express"); // express모듈
const app = express(); // express객체 생성
const PORT = 8081; // PORT 번호 설정

// views라는 폴더에 html관련 ejs파일들을 모아 놓기 위해 미들웨어 설정을 해줌
app.set("view engine", "ejs"); // view engine은 ejs로 설정 // 템플릿 엔진 설정
app.set("views", "./views"); // view 파일들은 views폴더에 모을 것 // 뷰파일 폴더 경로 설정

// body-parser 설정 --- body-parser설정 안해주고 form 제출을 하게되면 prompt창에는 undefined가 뜬다.
app.use(express.urlencoded({ extended: false }));
// urlencoded가 body를 해석해줌
// true와 false의 차이점은 헤석 할 때 어떤 모듈이 사용되는지만 알려줌
app.use(express.json()); // json 형식으로 데이터를 주고 받을 것이다.

// 요청 > 응답
app.get("/", function (req, res) {
  // get, post는 전부 콜백 함수를 인자로 받음.
  res.render("index");
  // '/'경로로 get요청이 들어오면 index.ejs를 보여줌.(확장자 적어도 되고 안적어도 됨)
});

// getForm에 get요청을 시켜달라했는데 아무것도 적지 않아서 결과화면에 아무것도 나오지 않음.
// form get요청 만들어주기
app.get("/getForm", function (req, res) {
  console.log(req.query); // get요청은 req.query라는 공간에 정보가 담겨져서 옴
  //   res.send("form data get 요청 성공");
  // 요청이 왔으면 응답을 보내줘야하기 때문에 res.send로 보내줘야하고 이 작업이 없으면 error남.
  res.render("result", {
    // render의 두번째 인자로 객체(오브젝트)가 올 수 있음.
    // 이 오브젝트에는 첫번째 인자로 들어온 result.ejs파일에 들어갈 정보들이 오면 됨.
    title: "GET", // title이라는 공간에 GET이라는 정보를 사용 할 것이다.
    userInfo: req.query, // query에 있는 모든 정보를 쓴다.(id, email, pw) , 객체 안에 객체가 담겨있는 형태.
  });
});

// form의 post요청 만들어주기
app.post("/postForm", function (req, res) {
  // index.ejs에 action속성에 적어놓은 주소를 적어주면 됨.
  console.log(req.body); // req안의 body로 정보가 전달됨
  //   res.send("form data 요청 성공"); // 요청에 대한 응답
  res.render("result", {
    title: "POST",
    userInfo: req.body, // POST요청시에는 정보가 있는 body를 적어준다.
  });
});

// form validation post로 요청
app.post("js-form-check", function (req, res) {
  console.log(req.body);
  res.send("js 유효성 검사");
});

// listen으로 PORT 열어주기
app.listen(PORT, function () {
  // 첫번 째 인자로 포트 두번째 인자로 함수 받아주고 함수의 인자는 안받아줌
  console.log(`http://localhost:${PORT}`);
  // 함수가 열리면 실행할 것들 ; 지금은 실행 할 것이 없으므로 console.log로 대체
});
