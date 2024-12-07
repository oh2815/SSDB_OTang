"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// TODO 1206 User  모델 불러오기
// TODO 1206 불러온 User 모델 db 객체에 추가하기 (키이름은 User)
db.sequelize = sequelize;

db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
