const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Product = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  marcaId: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  modelId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  numSerie: {
    type: DataTypes.STRING,
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
  },
  state: {
    type: DataTypes.ENUM('enable', 'disable'),
    allowNull: false,
    defaultValue: 'enable'
  }
});

module.exports = Product;