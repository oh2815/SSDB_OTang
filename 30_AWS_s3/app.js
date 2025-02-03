// npm i aws-sdk
// npm i multer-s3@2.10.0

const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const path = require("path");
const app = express();
const PORT = 8080;
dotenv.config();

// view engine 설정
app.set("view engine", "ejs");

// aws s3 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

// multer 설정1
// 서버에 사진을 저장하는 기존 코드
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname); // 확장자
//     cb(
//       null,
//       path.basename(file.originalname, ext) + Date.now() + ext,
//     );
//   },
// });

// multer 설정2
// s3에 사진을 저장하는 코드
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한 설정

    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index", { imageUrl: "" });
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  /* 
  {
  fieldname: 'image',
  originalname: 'animal-7024072_1280.png',
  encoding: '7bit',
  mimetype: 'image/png',
  size: 1730712,
  bucket: 'allie-bucket12',
  key: '1738560922396-animal-7024072_1280.png',
  acl: 'public-read',
  contentType: 'application/octet-stream',
  contentDisposition: null,
  contentEncoding: null,
  storageClass: 'STANDARD',
  serverSideEncryption: null,
  metadata: null,
  location: 'https://allie-bucket12.s3.ap-northeast-2.amazonaws.com/1738560922396-animal-7024072_1280.png',
  etag: '"8790b880f249e8a807b99f8a076d3d55"',
  versionId: undefined
}
  */

  if (req.file) {
    const imageUrl = req.file.location; // S3에 업로드된 파일의 경로
    res.render("index", { imageUrl });
  } else {
    res.send("이미지를 주세요...");
  }

  res.send("이미지 잘 받았다!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
