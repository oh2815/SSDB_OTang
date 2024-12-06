// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.getSignup);
router.get("/signin", controller.getSignin);
router.post("/signup", controller.postSignup);
router.post("/signin", controller.postSignin);

module.exports = router;
