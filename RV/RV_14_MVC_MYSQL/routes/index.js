const express = require("express");
const controller = require("../controller/Cvisitor");
// controller 불러오기
const router = express.Router();

router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);
router.get("/visitor/:id", controller.getVisitor);
// controller의 getVisitor불러오기

router.post("/visitor", controller.postVisitor);
// controller의 postVisitor불러오기

router.delete("/visitor", controller.deleteVisitor);
// controller의 deleteVisitor불러오기

router.patch("/visitor", controller.patchVisitor);
// controller의 patchVisitor불러오기

module.exports = router;
