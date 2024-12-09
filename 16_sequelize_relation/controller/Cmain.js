// const models = require("../models"); // models ={Player:.., Profile:., }
// models.Player.findAll()
const { Op } = require("sequelize");
const { Player, Profile, Team } = require("../models");
exports.main = (req, res) => {
  res.render("index");
};

// 전체 선수 조회
// GET /players
exports.getAllPlayers = async (req, res) => {
  try {
    // select * from player;
    const players = await Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 특정 선수 조회
// GET /players/:playerId
// player, profile 정보 조회 >> join필요!
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params); //{ playerId: '2'}
    const { playerId } = req.params; //'2'

    const player = await Player.findOne({
      where: { player_id: playerId },
      include: [
        { model: Profile, attributes: ["position", "salary"] },
        // attributes의 배열은 profile테이블의 컬럼명과 일치해야 함
      ],
    });
    res.send(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// POST /players
// 선수 추가
/* 
{
  name:'손흥민',
  age:30,
  team_id:1
}
*/
exports.postPlayer = async (req, res) => {
  try {
    console.log(req.body);
    // { name: '손흥민', age: 30, teamid:1 }
    // const newPlayer = await Player.create({
    //   // 컬럼명: 넣을데이터
    //   name: req.body.name,
    //   age: req.body.age,
    //   teamid: req.body.teamid,
    // });
    const newPlayer = await Player.create(req.body);
    res.send(newPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// Patch /players/:playerId/team
// 특정 선수의 소속 팀 변경
exports.patchPlayer = async (req, res) => {
  try {
    console.log(req.body);
    // { teamId: 1 }
    console.log(req.params);
    // { playerId: '2' }

    const updatedPlayer = await Player.update(
      {
        // 어떤 컬럼을 바꿀지
        teamid: req.body.teamId,
      },
      {
        // where 조건 작성
        where: {
          player_id: req.params.playerId,
        },
      }
    );
    res.send(updatedPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// DELETE /players/:playerId
// 특정 선수 삭제
exports.deletePlayer = async (req, res) => {
  try {
    console.log(req.params);
    // { playerId: '2' }
    const { playerId } = req.params;
    const isDeleted = await Player.destroy({
      where: {
        player_id: playerId,
      },
    });
    console.log("삭제 여부", isDeleted);
    if (Boolean(isDeleted)) {
      res.send("삭제 성공");
    } else res.send(false);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

/*  복잡한 where 조건 사용해보기 */
// GET /teams
// 정렬, 검색 >> req.query 사용
exports.getTeams = async (req, res) => {
  try {
    console.log(req.query); // {} {sort} {search}
    const { sort, search } = req.query;
    let teams;
    if (sort === "name_asc") {
      // 팀을 이름순으로 정렬해서 전체 조회
      teams = await Team.findAll({
        attributes: ["team_id", "name"], // SELECT team_id, name
        order: [["name", "ASC"]], // ORDER BY name ASC
      });
    } else if (search) {
      // search 키워드 기준으로 검색후 조회
      teams = await Team.findAll({
        attributes: ["team_id", "name"], // SELECT team_id, name
        where: {
          // WHERE name LIKE '%K%'
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      // sort가 name_asc가 아니거나,
      // search가 안들어왔을 때
      // 전체 조회
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
    }
    // 검색 및 정렬 로직 종료

    // -----응답-----
    if (teams.length === 0) res.send("다시 검색하세요. 정보가 없어요.");
    else {
      res.send(teams);
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// GET /teams/:teamId
// 특정 팀 조회
exports.getTeam = async (req, res) => {
  try {
    console.log(req.params);
    // { teamId: '1' }
    const { teamId } = req.params;
    const team = await Team.findOne({
      where: { team_id: teamId },
    });
    res.send(team);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// GET /teams/:teamId/players
// 특정 팀의 모든 선수 조회 >> join 필요
exports.getTeamPlayers = async (req, res) => {
  // 1. 특정 팀의 "선수정보만" 조회
  try {
    const { teamId } = req.params; // 1,2
    console.log(teamId);
    /*   const teamPlayers = await Player.findAll({
      where: {
        teamid: teamId,
      },
    }); */

    // 2. 특정 팀의 정보와 해당 팀의 선수까지 확인 > join
    const teamPlayers = await Team.findOne({
      where: { team_id: teamId },
      include: [{ model: Player }],
    });
    res.send(teamPlayers);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
