const Asignation = require("./asignation.model");
const Cargo = require("./cargo.model");
const Dependencia = require("./dependencia.model");
const ModelProduct = require("./modelProduct.model")
const Product = require("./product.model");
const Sede = require("./sede.model");
const User = require("./user.model");
const Marca = require("./../model/marca.model")

const initModel = () => {
  ModelProduct.hasMany(Product, {foreignKey: "modelId"});
  Product.belongsTo(ModelProduct, {foreignKey: "modelId"});

  ModelProduct.hasMany(Marca, {foreignKey: "marcaId"});
  Marca.belongsTo(ModelMarca, {foreignKey: "marcaId"});

  Sede.hasMany(User, {foreignKey: "sedeId"});
  User.belongsTo(Sede, {foreignKey: "sedeId"});

  Dependencia.hasMany(User, {foreignKey: "dependenciaId"});
  User.belongsTo(Dependencia, {foreignKey: "dependenciaId"});

  Cargo.hasMany(User, {foreignKey: "cargoId"});
  User.belongsTo(Cargo, {foreignKey: "cargoId"});

  Asignation.hasMany(User, {foreignKey: "userId"});
  User.belongsTo(Asignation, {foreignKey: "userId"});

  Asignation.hasMany(Product, {foreignKey: "productId"});
  Product.belongsTo(Asignation, {foreignKey: "productId"});
}

module.exports = initModel;