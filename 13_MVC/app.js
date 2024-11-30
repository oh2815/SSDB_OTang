const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
// // request에 body를 사용할 예정이므로 미들웨서 추가 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./routes/index");
// indexRouter라는 공간에 routes라는 폴더의 index.js 파일에서 require로 불러옴
// routes에서 내보내준 data가 들어온것
app.use("/", indexRouter);
// '/'라는 경로로 들어오게 됐을 때에는 indexRouter에 가서 확인해 봐라.

const userRouter = require("./routes/user");
// ./routes/user 이 경로에 있는 걸 불러와서 userRouter에 담는다.
app.use("/user", userRouter);
//   /user 라는 경로로 들어오게 되면 userRouter로 처리를 해주세요
// [404 error]
// 반드시 맨 마지막 라우트로 존재해야함
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
