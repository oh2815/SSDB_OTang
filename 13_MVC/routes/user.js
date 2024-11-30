// routes도 여러개로 나눠서 관리가 가능하다
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// GET /user
router.get("/", controller.getUser);
// 이 조건이 원하는 것은 get요청이 들어왔을 때이니까 뒤에 괄호를 쓰면 안됨
// 콜백이기때문에 뒤에 괄호를 쓰게되면 바로 호출이 되버림.
// 이 경로로 들어오면 기본적으로 다 userRouter에서 처리가 됨
// 단순'/'가 아닌 '/user'인 셈

// GET /user/aa
// roueter.get("/aa",~~~); // 이미 user로 처리가 된것으로 aa만 적어도 된다.

// POST /user/login
// router.post("/login",~~~); // 이미 user로 처리가 된것으로 login만 적어도 된다.

// 이렇게 router가 분리됐으면 controller 도 분리해주는게 좋다.
module.exports = router;
