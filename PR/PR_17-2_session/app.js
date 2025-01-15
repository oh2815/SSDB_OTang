const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 세션 설정, 10분 뒤 세션 종료하도록
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
    },
  })
);

// DB
const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

app.get("/", (req, res) => {
  // 로그인이 안된 유저 > {isLogin:false}
  // 로그인이 된 유저 > {isLogin:true, user:유저}
  console.log("GET /", req.session);
  const user = req.session.user;
  if (user) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
  res.render("login");
});

// POST /login
// 실제 로그인 진행
app.post("/login", (req, res) => {
  // 로그인 여부 판단
  console.log(req.body);
  if (userInfo.userId === req.body.id && userInfo.userPw === req.body.pw) {
    // console.log("로그인 가능한 user");
    // 세션 생성
    // 세션의 user라는 키를 추가하여 userId값을 value로 전달
    req.session.user = req.body.id;
    console.log("POST /login", req.session);
    res.redirect("/");
  } else {
    // console.log("로그인 불가능한 user");
    res.send(`
      <script>
        alert("아이디 또는 비밀번호가 틀렸어요. 다시 시도하세요.");
        document.location.href="/login";
      </script>
      `);
  }
});

// GET /logout
// 실제 로그아웃 진행
app.get("/logout", (req, res) => {
  // 세션 삭제
  console.log("GET /logout", req.session);
  const user = req.session.user;
  if (user) {
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect("/");
    });
  } else {
    // 로그인이 안된 유저(세션이 만료된 유저)
    res.send(`
        <script>
        alert('이미 세션이 완료 되었어요.');
        document.location.href="/";
        </script>`);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
