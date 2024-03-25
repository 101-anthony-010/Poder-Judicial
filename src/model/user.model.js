const { DataTypes } = require('sequelize');
const { db } = require('./../database/config');

const User = db.define('users', {
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
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sedeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dependenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cargoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM('enable', 'disable'),
      allowNull: false,
      defaultValue: 'enable'
    }
})

module.exports = User;