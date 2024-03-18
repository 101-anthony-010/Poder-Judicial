const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Dependencia = db.define("dependencia", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  dependencia: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Dependencia;