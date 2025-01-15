const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어처리
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

// 라우터
const indexRouter = require("./routes");
app.use("/", indexRouter);

// 404 에러처리
app.get("*", (req, res) => {
  res.render("404");
});

// 포트열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
