const express = require("express");
const db = require("./models"); // 파일 이름 안쓰면 알아서 index.js로 설정
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

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

db.sequelize.sync({ force: false }).then((result) => {
  //  연결 되고나서 할 일들을 then에 적어주면됨
  // console.log(result); // 엄청나게 긴 sequelize의 정보 객체가 나타남
  console.log("DB연결 성공");
  console.log("-----------");
});

// 포트열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
