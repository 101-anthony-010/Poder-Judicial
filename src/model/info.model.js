const { DataTypes } = require('sequelize');
const { db } = require('./../database/config');

const Info = db.define('infos', {
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
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marcaPrinter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelPrinter:{
      type: DataTypes.STRING,
      allowNull: false
    },
    codeInventory: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modelCPU: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serieCPU: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procesador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    memoryRAM: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diskCapacity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diskTechnology: {
      type: DataTypes.ENUM("IDE","SATA"),
      allowNull: true
    },
    graphicTarget: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdrom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    marcaMonitor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modeloMonitor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serieMonitor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    teclado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contometro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    count: {
      type: DataTypes.STRING,
      allowNull: true
    },
    countFirware: {
      type: DataTypes.STRING,
      allowNull: true
    }
})

module.exports = Info;