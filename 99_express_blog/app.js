const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

const tempDB = [
  {
    contentID: 1,
    title: "제목1",
    content: "토요일 수업..",
    img: null,
  },
  {
    contentID: 2,
    title: "제목22222",
    content: "토요일 수업..",
    img: "/static/img/pooh.png",
  },
  {
    contentID: 3,
    title: "제목3333",
    content: "토요일 수업..",
    img: null,
  },
  {
    contentID: 4,
    title: "백엔드가 많이 어렵니요?",
    content: "토요일 수업..",
    img: null,
  },
  {
    contentID: 100,
    title: "백엔드가 많이 어렵니요?",
    content: "토요일 수업..",
    img: null,
  },
];

const tempUser = "Allie 짱✨";
// ### 미들웨어 설정
// 미들웨어란?
// 요청(request)과 응답(response)사이에서 중간다리 역할을 수행하는 SW
// ex1) request의 body를 서버에서 읽을 수 있도록 도와주는 'body-parser'
// ex2) request에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
// ex3) static 파일 설정을 도와주는 app.use(express.static(~))

/* 미들웨어1. views 설정 - set() 이용
1. html 파일을 어디에 모아둘건지
2. html 엔진을 어떤걸 사용할건지
*/
app.set("views", "./views");
app.set("view engine", "ejs");

/* 미들웨어2. static 폴더 설정
- static 폴더란?
  외부(브라우저 등의 client)에서 접근 가능한 폴더
  프론트에서 사용하는 js, css, 이미지/동영상 등을 모아둔 폴더
*/
// 실제 경로는 public이지만 접근할 때는 /static으로 접근
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

/* 미들웨어3. body-parser 설정 (express 내장)
- req.body는 기본적으로 undefined로 설정되어 있는데,
  body-parser 가 req.body를 서버측에서 사용할 수 있도록 파싱(parsing)해줌

  - parse: 어떤 데이터를 우리가 원하는 데이터의 형태로 바꾸는 것!
      JSON.parse(): JSON을 우리가 원하는 객체 형태로 파싱
      JSON.stringify(): 객체를 우리가 원하는 JSON으로 파싱
      body-parser: req.body를 우리가 사용할 수 있도록 파싱 
*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 미들웨어4. multer 설정(npm install multer, 설치 필요)
- 참고: multer 의 
   dest 속성은 경로에 해당하는 폴더를 자동으로 만들어주지만,
   세부 설정이 어렵다.
   >> 대신, storage 설정을 사용할 것!
*/
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname); // .png, .pdf, ...
      const filename = path.basename(file.originalname, ext) + Date.now() + ext;
      cb(null, filename);
      //   Date.now(): 1970.01.01 0시 0분 0초부터 현재까지 경과된 밀리초
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

app.get("/", (request, response) => {
  //   console.log(request);

  //   response.send({ id: "allie", pw: "1234" });
  response.render("index", {
    user: tempUser,
    contentData: tempDB,
  });
});
/* GET 요청의
params vs. query
- params
  - 서버에서 url 표기 /sesac/:id
  - 클라이언트에서 요청 url /sesac/123
  - req.params를 통해 객체로 확인할 수 있음 {id:'123'}
  - 서버에서 정해둔 순서에 맞게 parameter가 들어가야 함
  - 네이버 블로그처럼 글을 "조회"할 때 사용
- query
  - 서버에서 url 표기 /sesac
  - 클라이언트에서 요청 url /sesac?id=123
  - req.query를 통해 객체로 확인할 수 있음 {id:'123'}
  - 정해지지 않은 쿼리가 올 수 있음
  - 검색, 정렬, 필터링 기능
*/

app.get("/content/:contentID", (req, res) => {
  //   console.log(req.query);
  console.log(req.params);
  console.log(req.params.contentID); //'2'
  /* 객체 구조 분해 할당 */
  //   const data = { name: "allie", pw: "1234" };
  //   const { name, pw } = data;
  const { contentID } = req.params;

  /* 배열.filter 사용해서 원하는 데이터 찾기 */
  const contentData = tempDB.filter((obj) => {
    return obj.contentID === Number(contentID);
  });

  // filter 의 반환값은 배열이기 때문에 객체를 가져오기 위해 0번으로 접근
  const contentObj = contentData[0];
  /* 
  {
  contentID: 100,
  title: '백엔드가 많이 어렵니요?',
  content: '토요일 수업..',
  img: null ("/static/~~~")
}
  */
  console.log(contentObj); // undefined 이거나 object
  //   const array = [1, 2, 3, 4, 5];
  //   const newArray = array.filter((number) => {
  //     return number == 3;
  //   });
  //   console.log(newArray);

  if (contentObj) {
    res.render("content", contentObj);
  } else {
    res.render("404");
  }

  res.send("응답 완료");
});

app.get("/write", (req, res) => {
  res.render("writeContent");
});

// 글 작성 - form 태그를 이용해서 요청
app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  tempDB.push({
    contentID:
      tempDB.length === 0 ? 1 : tempDB[tempDB.length - 1].contentID + 1,
    content: req.body.content,
    img: req.file ? "/" + req.file : null,
    title: req.body.title,
  });
  console.log(tempDB);
  res.redirect("/"); // 페이지 전환
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
