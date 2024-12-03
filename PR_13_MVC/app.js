const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 불러와서 indexRouter에 담아주기
const indexRouter = require("./routes/index");
// 경로 불러올 때 default값이 index이므로 뒤에 '/index' 안해줘도 된다.
app.use("/", indexRouter);

// 404 설정
app.get("*", (req, res) => {
  res.send("<h2>Page Not Found</h2>");
});
// 포트 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log("dddd");
});
