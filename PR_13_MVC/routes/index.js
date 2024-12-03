const express = require("express");
// routes에는 express를 불러와야한다.
const controller = require("../controller/Cuser");
// controller에 있는 함수들도 불러와야 한다. ( 변수 이름 상관 없음 )
const router = express.Router();
// express에서 router의 기능만 가져올 것이기 때문에  router만 불러옴
// '/'경로에 들어갔을 때 get요청 혹은 post 요청을 해주는 그 역할만 해줄예정으로 express객체를 만드는 것이 아니고 router만 불러옴.

router.get("/", controller.main);
// '/'경로로 들어왔을 때 해야할 일을 다음 인자로 적음
// controller에 있는 코드를 불러옴. - 객체로 들어오기때문에 .으로 접근

router.post("/login", controller.login);
// login 주소로 post요청
// login으로 왔을때 controller.login 이라는 함수를 만들어주세요.
// controller.login이거는 아직 만들어주기 전이라 Cuser에 가서 만들어주기

//------------실습2
router.post("/login2", controller.login2);
// 다 쓰고 controller 넘어가기

module.exports = router;
// app.js에서 사용하기 위해 내보내줌.( 방금 불러온 router객체 )
