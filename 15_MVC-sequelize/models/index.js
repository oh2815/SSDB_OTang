"use strict";
const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.json")["development"];
// require 객체, 뒤의 배열을 확인해주고싶어서 ,, jsom:객체
console.log("config", config);
const db = {};

// let sequelize; // 설정을 다양하게 하기위해

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

db.sequelize = sequelize;
// 설정 정보를 sequelize 라는 키에 넣어주는 중(객체)
// {
//   sequelize:sequelize
// }
db.Sequelize = Sequelize;
// 위에 설정해준 Sequelize모듈을 Sequelize키에 넣어주는 중(객체)
// {
//   Sequelize:Sequelize,
//   sequelize:sequelize
// }
db.Visitor = require("./Visitor")(sequelize, Sequelize);
// 함수 호출중
// {
//   Sequelize:Sequelize,
//   sequelize:sequelize,
//   Visitor: visitor의 모델
// }

module.exports = db; // app.js
// index.js 와 Visitor.js를 읽어줄 수 있게 app.js에서 sync 를 시켜줘야함
