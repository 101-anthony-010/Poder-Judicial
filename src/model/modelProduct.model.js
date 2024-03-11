const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const ModelProduct = db.define('modelProducts', {
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

module.exports = ModelProduct;