const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body- parser  ----
// ajax나 axios로 데이터를 전송을 해도 body로 통하기 때문에 설정 해줘야 한다.
app.use(express.urlencoded({ extended: false })); // 모듈 설정
app.use(express.json()); // json식의 data를 주고 받는다.

/* API ---- PORT사이트로 들어올 때 보여지는 page설정 */
// '/'로 들어왔을 때 render를 시작해서 index.ejs를 보여주겠다.
app.get("/", (req, res) => {
  res.render("index");
  // 위에 설정 해 준 views 폴더 안에 index.ejs가 있어야 한다.
});

/* Ajax */
// /ajax GET요청 보내기
app.get("/ajax", (req, res) => {
  console.log(req.query); // get요청이므로 query에 들어오게 된다.
  // res.send("응답") // 응답이라는 문자열만 보내주기 위해서 send를 사용함.
  res.send(req.query); // 응답으로 req.query를 보내준다.
});

// /ajax POST요청 보내기
app.post("/ajax", (req, res) => {
  console.log(req.body);
  // post에서는 값이 body로 들어옴.
  // body-parser 설정을 해주었기 때문에 오류 없이 나타남.
  res.send(req.body);
});

/* Axios */
// /axios GET요청 보내기
app.get("/axios", (req, res) => {
  console.log(req.query); // get요청이므로 query에 들어오게 된다.
  res.send(req.query); // 응답으로 req.query를 보내준다.
  // {name:'allie', gender:'여성'} --- query는 이런 데이터.
});

// /axios POST요청 보내기
app.post("/axios", (req, res) => {
  console.log(req.body);
  // res.send("응답완료") // "응답완료"라는 문구를 console.log로 내보내 줌
  res.send(req.body); // ejs에서 resultBox에 textcontent로 텍스트를 남기기위해서 사용
});

/* FETCH 요청 */
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // res.send("응답 완료"); // text를 보내기 때문에 ejs파일에서 데이터를 가져 올 때에는 resonse.text()라는 함수를 사용해야 한다.
  res.send(req.query); // 이렇게 객체를 보내게 되면 response.text()가 아니라 response.jason()을 사용해야 한다.
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body); // data가 object가 json 형태로 있기 때문에 text가 아닌 (req.body)를 써도 된다.
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
