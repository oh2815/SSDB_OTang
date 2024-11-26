const express = require("express");
const app = express();
const PORT = 8080;
/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* API */
app.get("/", (req, res) => {
  res.render("index");
});

/* ajax 요청 */
// /ajax GET
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send("응답!");
  res.send(req.query);
});

// /ajax POST
app.post("/ajax", (req, res) => {
  // body-parser 설정을 해야 req.body를 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
});

/* axios 요청 */
// /axios GET
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
  /* 
  {name:'allie', gender:'여성'}
  */
});

// /axios POST
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* fetch 요청 */
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // 클라이언트에서 .text() 사용
  //   res.send("응답완료!!");

  // 클라이언트에서 .json() 사용
  res.send(req.query); // 객체를 보낸다.
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  //{ name: 'allie', gender: '여성' }
  res.send(req.body);
});

// 외부 API 사용하기
app.get("/api", (req, res) => {
  res.render("api.ejs");
});

// 실습 과제1 axios 요청
app.get("/axios1", (req, res) => {
  console.log(req.query);
  res.render("pr_241125");
});

// 실습 과제1 page axios 요청
app.get("/axios-pr1", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 실습 과제2 axios 요청
app.get("/axios2", (req, res) => {
  console.log(req.body);
  res.render("pr2_241125");
});
// 실습 과제2 page axios 요청
app.post("/axios2-pr", (req, res) => {
  console.log(req.body);
  // { userId: 'fff', userPw: 'fff' }
  // const { userId, userPw } = req.body;
  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
  // res.send("응답완료");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
