const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Sede = db.define("sede", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Sede;