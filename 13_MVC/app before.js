const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// // request에 body를 사용할 예정이므로 미들웨서 추가 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 나중에는 Database에서 가져와야하는 임시 데이터 */
const comments = [
  {
    id: 1,
    userid: "apple",
    date: "2024-10-23",
    comment: "안녕하세요~~~~~~~~~~~~",
  },
  {
    id: 2,
    userid: "banana",
    date: "2024-11-23",
    comment: "반갑습니다!!!!!~~~~~",
  },
  {
    id: 3,
    userid: "cocoa",
    date: "2024-09-23",
    comment: "아무거나 쓰겠습니다...",
  },
  {
    id: 4,
    userid: "donut",
    date: "2024-10-31",
    comment: "곧 점심시간 이네요..",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

// views - index.ejs에서 만든 /comments라는 주소에 들어갔을 때;
app.get("/comments", (req, res) => {
  console.log(comments);
  // 배열 형태로 들어와있음
  // 데이터베이스에서 불러올 데이터라고 생각
  res.render("comments", { commentInfos: comments });
  // comments.ejs를 보내려면 별 다를 것 없이 두번째 인자로 객체만 보내면 됨
  // 배열 받아서 for문으로 li 태그로 보내주면 됨
});

app.get("/comment/:id", (req, res) => {
  /* 일단 comment의 1번으로만 왔고, 3개의 comment가 남았지만,
    훨씬 많은 수의 data를 맞이하게 되면 하나하나 작성을 못해준다.
    그러므로 일괄로 처리를 해줄 수 있는 식을 적어준다.  */

  // comment뒤에 ':params'값이 올 수 있다. --- :id 적어줌으로  1-4 comment를 한번에 처리
  // get요청은 data를 req.query로도 받을 수 있지만 req.params로도 받을 수 있다.
  // 주소창에 1-4 이외의 값을 넣어도 일단 주소창에 적은 자리도 id값이기 때문에 오류가 나지않고 적은 문자 그대로 명령창에 뜬다.

  console.log(req.params);
  // url다음에 연결되는 부분을 변경하여 처리 해줄수 있음.
  // --- console.log(req.query);
  // url에 ?다음으로 오는 값으로 변경을 해줄수 있다.
  //http://localhost:8080/comment/dddd?name=hi 이런식이면 params 값으로는dddd가, qurey값으로는 hi가 찍힌다.

  const commentId = req.params.id;
  /*   따로 저장한 이유는: 댓글 전체정보가 아닌 한개의 정보를 보내기 위해 어떤 아이디가 들어오면
  그 아이디에 대한 댓글을 찾기위해 저장함. */

  console.log("commentId:", commentId);
  // 여기서의 id는 위에 const = comments에서 정해준 id값이 아닌 key값이다.
  // :userid 라고하고 결과를 봐도 id: '1'이라고 나온다.

  console.log(comments[commentId - 1]);
  // comments안의 배열 0 번째 -- 각가의 id에 대한 댓글 정보 객체data

  if (commentId < 1 || commentId > comments.length) {
    // commentId가 1보다 작고, 또는 commentId가 배열의 갯수보다 많은수이면 404화면을 띄워라.
    res.render("404");
  }

  if (isNaN(commentId)) {
    // isNaN : not a number : 숫자가 아닌 문자열이 오게 된다면 404화면을 띄워라.
    // 이 외의 수많은 에러 상황들은 제일 아래,app.listen 위에다가 쓰면 된다.
    res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
  // commentInfo 라는 객체형태의 key에 담아서 comment.ejs로 보내 줄 것이다.
});

// [404 error]
// 반드시 맨 마지막 라우트로 존재해야함
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
