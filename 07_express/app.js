const express = require("express");
const app = express();
const PORT = 8080;

// middleware 설정 추가
// 뷰엔진 설정
app.set("view engine", "ejs");
app.set("/views", "views");

// static 폴더 설정 추가
app.use("/static", express.static(__dirname + "/public"));
// /static 이라는 경로를 /public 대신에 사용할거다!

app.get("/", function (request, response) {
  /* 
    - request: 클라이언트가 서버에게 보내는 요청
    - response: 서버가 클라이언트에게 보내는 응답
    */
  // console.log(request)
  // response.send('hello express!!!!!!')
  response.render("test", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추워요,",
    },
  });
});

// get /login
app.get("/login", function (req, res) {
  res.render("login", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추워요,",
    },
  });
});

// get /register
app.get("/register", (req, res) => {
  res.render("register", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추워요,",
    },
  });
});

// 404 처리
app.use(function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
