const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const cookieConfig = {
  maxAge: 10 * 1000,
  httpOnly: true,
  signed: false,
};

// TODO: 쿠키 미들웨어 설정
app.get("/", (req, res) => {
  //   res.render("index");
  // TODO: 쿠키값 가져오기   및 index.ejs에 보내기
  res.render("index", { popup: req.cookies.prCookie });
});

app.post("/set-cookie", (req, res) => {
  // TODO: 쿠키 생성하기
  res.cookie("prCookie", "cookie~~", cookieConfig);
  res.send("쿠키 생성 성공!!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
