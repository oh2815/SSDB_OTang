"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.js")["devel"];
const db = {};

console.log(config);
// 1. Sequelize 클래스를 통해서 sequelize
let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 2. 모델을 불러오면서 인자로 정보 전달

const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// (3) 모델간 관계 설정
// 3-1) Player:Profile=1:1
PlayerModel.hasOne(ProfileModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(ProfileModel, {
  foreignKey: "player_id", // 내가 정해준 이름
});

// 3-2) Team:Player = 1:N
TeamModel.hasMany(PlayerModel, {
  foreignKey: "teamid", // 내가 정해주는 이름
  sourceKey: "team_id", // 실제로 참조할 이름
  // 실제 team model의 컬럼명과 일치해야 함
  // models/Team.js 의 primary Key
});
PlayerModel.belongsTo(TeamModel, {
  foreignKey: "teamid", // 내가 정해주는 이름
  targetKey: "team_id", // 실제로 참조할 이름
});

// 3-3) Team:Game = M:N
// 중개테이블 teamgame 활용해야함
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id", // 내가 정해주는 이름, for team model
});

GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id", // 내가 정해주는 이름
});

// (4) db 객체에 모델 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// // 3. 모델간 관계 설정
// // 불러오는거랑 모델추가는 따로 따로 해야함. -- 관계 설정을 해야하기 때문
// // 3-1) Player:Profile = 1:1
// // 주가 되는 테이블 찾기 : Player -- hasOne
// PlayerModel.hasOne(ProfileModel, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
//   foreinkey: "player_id",
// });
// ProfileModel.belongsTo(ProfileModel, {
//   foreinkey: "player_id", //  내가 정해준 이름
//   // key의 MUL : forein key
// });

// // 3-2) Team:Player = 1:N
// TeamModel.hasMany(PlayerModel, {
//   // team은 많은 player를 가지고있다.
//   foreinkey: "teamid", //  다르게 하려면 source key를 설정 해줘야 됨
//   sourcekey: "team_id", // 실제로 참조할 이름
//   // 실제 team model의 컬럼명과 일치해야함
//   // models/Team.js의 primary Key
// });
// PlayerModel.belongsTo(TeamModel, {
//   foreinKey: "teamid",
//   targetKey: "team_id",
// });
// // 3-3) Team:Game = M:N
// // 중개테이블 teamgame 활용해야함
// TeamModel.belongsToMany(GameModel, {
//   through: TeamGameModel,
//   foreinKey: "team_id", // 내가 정해주는 이름, for team model
// });
// GameModel.belongsToMany(TeamModel, {
//   through: TeamGameModel,
//   foreinKey: "game_id", // 내가 정해주는 이름
// });
