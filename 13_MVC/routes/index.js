const express = require("express"); // express불러오기
const router = express.Router(); // router에 express에서 제공하는 Router함수 사용해서 담아주고
const controller = require("../controller/Cmain");
// 함수부분을 떼어서 다른파일에 만들어줬으니 그것을 끌고옴

// app 이라는 파일이 아닌 경로로 들어오게 됐을 때 시행이니까 app을 router로 바꾼다

// router.get("/", (req, res) => {
//   res.render("index");
// }); 여기서 경로에 해당하는 부분'/' 빼고 실제 동작하는 함수부분을 controller로 빼준다.

router.get("/", controller.main);

router.get("/comments", controller.comments);

router.get("/comment/:id", controller.comment);

module.exports = router; // 내보내기 --- app.js에서 사용
