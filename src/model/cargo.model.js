const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Cargo = db.define("cargo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Cargo;