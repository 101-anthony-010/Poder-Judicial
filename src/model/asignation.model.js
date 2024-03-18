const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Asignation = db.define("asignation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

module.exports = Asignation;