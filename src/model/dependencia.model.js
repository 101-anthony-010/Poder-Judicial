const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Dependencia = db.define("dependencia", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Dependencia;