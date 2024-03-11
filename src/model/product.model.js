const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Product = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  marca: {
    type: DataTypes.STRING,
    allowNull:false
  },
  modelId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  numSerie: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Product;