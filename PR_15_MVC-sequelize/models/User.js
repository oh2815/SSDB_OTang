// User table 동기화를 위해서
// 테이블 정보 정의
// const User = (sequelize, DataTypes) => {
//   const user = sequelize.define(
//     "user",
//     {
//       // TODO 1206:  컬럼정보 정의
//       // (참고)
//       // init.sql 의 create Table User ~~ 참고해서
//       // 제약조건 및 데이터 타입 설정하기
//     },
//     {
//       freezeTableName: true,
//     }
//   );
// };

const User = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return user;
};

module.exports = User;

// TODO 1206:
// User 라는 함수를 models/index.js 에서 사용할 수 있도록 내보내기
