40;
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");

// TODO: 쿠키 미들웨어 설정
app.use(cookieParser("secret"));

app.get("/", (req, res) => {
  // TODO: 쿠키값 가져오기 및 index.ejs에 보내기
  // cookie 접근
  // - req.cookies : 암호화되지 않은 쿠키
  // - req.signedCookies: 암호화된 쿠키
  console.log("cookies", req.signedCookies); // {}
  //  { popup: 'hide' }
  console.log("cookies", req.signedCookies.pop); //hide
  res.render("index", { popup: req.signedCookies.popup });
});

app.post("/setCookie", (req, res) => {
  // TODO: 쿠키 생성하기
  res.cookie("popup", "hide", {
    signed: true, // 암호화된 쿠키
    maxAge: 1000 * 60 * 60 * 24, // 수명 24시간
  });
  res.send("쿠키 생성 성공!!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
