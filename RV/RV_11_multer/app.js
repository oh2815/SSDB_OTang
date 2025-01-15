const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path"); // 파일이름을 잘 설정하기 위해 불러옴.
const app = express();
const PORT = 8080; // PORT 번호

/* 미들웨어 설정 */
// 1. view engine 설정
app.set("view engine", "ejs"); // view engine을 ejs로 설정
app.set("views", "./views"); // views폴더 설정을 'views'라는 폴더로 설정

/* 2. body-parser 설정 */
app.use(express.urlencoded({ extended: false })); // true 여도 되고 false여도 상관없음
app.use(express.json());

/*  3. static 폴더 설정 */
app.use("/static", express.static(__dirname + "/public"));
// ___dirname:  현재폴더의 위치 + 실제 폴더의 경로
// "/public이라는 경로에 있는 것을 /static 으로 사용 하겠다"
app.use("/uploads", express.static(__dirname + "/uploads"));
// public이라는 폴더 이외에 uploads라는 폴더도 static한;정적인 파일들이 올라가고있기 때문에 설정을 해주어야 한다.
// client에서 uploads에 있는 정보들을 src를 통해서 읽어오기 위해 설정 해준다.

/*  4. multer 설정 */
const upload = multer({
  // upload라는 객체 생성
  dest: "uploads/", // 어느 폴더로 사진을 올릴건지 경로 설정
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      // done은 콜백!
      done(null, "uploads/"); // 어디에 저장될지 경로 설정!
      //  done에서는 자동으로 파일이 만들어지지 않으므로
      //  uploads 라는 폴더가 미리 만들어져있어야 함
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname); // 확장자만 불러옴
      // path.extname(파일이름.확장자) >> 확장자만 반환 // .png
      // 파일이름.확장자는 file.originalname 에 담겨있음>> 26139_img.png : 원본 파일 명

      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      ); // path.basename(파일이름.확장자, 확장자) >> 파일이름만 반환 //26139_img
      // 현재 시간에 대한 값을 넣은 이유 이름이 중복되면 구분이 힘들기 때문에 구분을 위해 넣어줌

      console.log("path.basename", path.basename(file.originalname, extension));
      // 확장자를 뺀 원본 파일의 이름
      console.log("path.extname", path.extname(file.originalname));
      // 확장자를 뽑아내는 함수
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 }, // 5MB로 설정
});

/*   "/"라는 경로로 get요청이 들어오고,
    index.ejs가 보여질 수 있도록 응답을 해줘라.   */
app.get("/", (req, res) => {
  res.render("index");
});

/* upload에 대한 post요청 */
// app.post("/upload", upload.single("userfile") // upload 설정값을 다르게 해줬으므로 바꿔줌
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  // 두번째인자인  upload.single()에는 문자열이 한 개만 들어갈 수 있음
  // single()은 file을 한 개만 받아주는데 인자로 그 file에 대한 name값을 받아준다.
  console.log(req.body);
  // 파일 정보는 req.body에서는 확인 할 수 없고, req.file에서 확인해야 한다.
  console.log(req.file);
  /* 
{
  fieldname: 'userfile', // 폼 내부에 정의한 name 값
  originalname: '26139_img.png', // 원본 파일명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'image/png', // 파일타입
  destination: 'uploads/', // 파일 저장경로
  filename: '8e42f8a0c4d8d43663e93cc832b4590a', // 저장된 파일명
  path: 'uploads\\8e42f8a0c4d8d43663e93cc832b4590a', 
   // 업로드된 파일 전체 경로
  size: 469955 // 파일 크기 (byte)
}
  */
  res.send("응답"); // 요청을 받았으면 무조건 응답을 해줘야 함.
});

/* 하나의 input에 여러개의 파일 */
// .array()
app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  //   console.log(req.file); // undefined
  console.log(req.body); //
  console.log(req.files); // 파일 여러 개일 때는 files(복수형)으로 확인!!!
  // 배열형태로 들어온다.
  /* {
      fieldname: 'multifiles',
      originalname: 'teddy-bear-7441597_1280.png',
      encoding: '7bit',
      mimetype: 'image/png',
      destination: 'uploads/',
      filename: 'teddy-bear-7441597_12801732518390796.png',
      path: 'uploads\\teddy-bear-7441597_12801732518390796.png',
      size: 1122862
   }[] */
  console.log(req.body);
  res.send("업로드 완료!!!!!");
});

/* 여러개의 input에 파일 업로드 */
// .fields() 사용
// fields의 매개변수(인자)는 name이라는 key를 가진 배열 / [{name:'name값1'},...]
app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" }, // 객체를 3개 가지는 배열 3개
    { name: "file2" }, // input이 3개니까
    { name: "file3" }, // name값도 3개
  ]),
  (req, res) => {
    console.log(req.files); // 여러개를 가지고 있기에 files
    // upload.fields() 로 받아주는 req.files 객체 형태로 들어옴
    console.log(req.body);
    /* 
          {filename1:[{업로드 파일 정보}], 파일name2:[{업로드 파일 정보}], ...}
      */
    res.send("업로드 완료");
  }
);

// 동적폼 파일업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  // 한 개의 파일만 취급하므로 single()을 써주고, 매개변수로는 append한 이름과 동일하게 써주면 된다.
  console.log(req.file);
  // 파일을 하나만 보내므로 file에서 확인
  // 1. 업로드한 파일을 찍어주고 있고,
  /* 
    res.data의 내용
    {
    fieldname: 'dynamicFile',
    originalname: 'animal-7024072_1280.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'animal-7024072_12801732520696723.png',
    --저장된 file의 이름--
    path: 'uploads\\animal-7024072_12801732520696723.png', 
   --path-- 전체 경로까지 저장된 정보. 이걸 이용해서 실제 이미지가 저장된 걸 가지고 올 수 있다. 
    size: 1730712
    }
    */
  res.send(req.file);
  // body정보랑 file이랑 같이 보내려고하는데 아직 body가 넘어온게 없으니 req.file을 보냄
  // 2. 업로드한 파일을 그대로 client에게 보내고 있음
});

// 포트 열어주기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
