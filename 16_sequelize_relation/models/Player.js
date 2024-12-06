const PlayerModel = (sequelize, DataTypes) => {
  const game = sequelize.define(
    "player",
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return game;
};

module.exports = PlayerModel;
