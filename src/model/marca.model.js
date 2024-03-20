const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Marca = db.define('marcas', {
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

module.exports = Marca;