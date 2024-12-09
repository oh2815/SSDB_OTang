const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/players", controller.getAllPlayers);
router.get("/players/:playerId", controller.getPlayer);

router.post("/players", controller.postPlayer);
router.patch("/players/:playerId/team", controller.patchPlayer);
router.delete("/players/:playerId", controller.deletePlayer);

// 검색 및 정렬
router.get("/teams", controller.getTeams);
router.get("/teams/:teamId", controller.getTeam);
router.get("/teams/:teamId/players", controller.getTeamPlayers);

module.exports = router;
