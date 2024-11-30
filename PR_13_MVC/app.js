const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 포트 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log("dddd");
});
