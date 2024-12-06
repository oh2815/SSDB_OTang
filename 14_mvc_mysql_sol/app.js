const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
// [라우터 분리]
const userRouter = require('./routes/user'); // routes안의 user.js는 파일이름 생략 불가능
app.use('/user', userRouter); // localhost:PORT/user 기본 경로

// TODO: 404 에러 처리
// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  // 기본주소 /user 이기 때문에 listen 에서도 편의상 /user 로 가도록 처리해둠
  console.log(`http://localhost:${PORT}/user`);
});
