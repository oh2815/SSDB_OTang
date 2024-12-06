const TeamGameModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "teamgame",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
module.exports = TeamGameModel;
