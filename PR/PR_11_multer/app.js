const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path"); // 파일이름을 잘 설정하기 위해 불러옴.
const app = express();
const PORT = 8080; // PORT 번호

/* 미들웨어 설정 */
// 1. view engine 설정
app.set("view engine", "ejs"); // view engine을 ejs로 설정
app.set("views", "./views"); // views폴더 설정을 'views'라는 폴더로 설정

// 2. static
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/static"));

// 3. body-parser
app.use(express.urlencoded({ extended: false })); // true 여도 되고 false여도 상관없음
app.use(express.json());

/*  4. multer 설정 */
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname); // 확장자
      done(null, req.body.userid + Date.now() + extension);
    },
  }),
});

/*   "/"라는 경로로 get요청이 들어오고,
    index.ejs가 보여질 수 있도록 응답을 해줘라.   */
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.body);
  /*  {
  userid: 'dhxodnjs',
  userpw: 'asd',
  username: '오태원',
  userold: 'old'
} */
  console.log(req.file); //  받기위해 해주는 설정은  uploadDetail.single("userFile"),
  /* {
  fieldname: 'userfile',
  originalname: 'Starbucks-logo.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'dhxodnjs1732677643501.png',
  path: 'uploads\\dhxodnjs1732677643501.png',
  size: 25553
} */

  //   res.send("응답하라");
  res.render("result.ejs", {
    ...req.body, // = userInfo: req.body
    src: req.file.path,
  });
});

// 포트 열어주기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
