/**
 * Will also create default createdAt and updatedAT - in total Rails fashion
 * @param {} sequelize
 * @param {*} Sequelize
 */
module.exports = (sequelize, Sequelize) => {
  return sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
  });
};
