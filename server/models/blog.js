/**
 * Will also create default createdAt and updatedAT - in total Rails fashion
 * @param {} sequelize
 * @param {*} Sequelize
 */
module.exports = (sequelize, Sequelize) => {
  return sequelize.define("blog", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: Sequelize.STRING,
  });
};
