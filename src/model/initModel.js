const Asignation = require("./asignation.model");
const Cargo = require("./cargo.model");
const Dependencia = require("./dependencia.model");
const ModelProduct = require("./modelProduct.model")
const Product = require("./product.model");
const Sede = require("./sede.model");
const User = require("./user.model");

const initModel = () => {
  Product.hasMany(ModelProduct, {foreignKey: "modelId"});
  ModelProduct.belongTo(Product, {foreignKey: "modelId"});

  User.hasMany(Sede, {foreignKey: "sedeId"});
  Sede.belongTo(User, {foreignKey: "sedeId"});

  User.hasMany(Dependencia, {foreignKey: "dependenciaId"});
  Dependencia.belongTo(User, {foreignKey: "dependenciaId"});

  User.hasMany(Cargo, {foreignKey: "cargoId"});
  Cargo.belongTo(User, {foreignKey: "cargoId"});

  Asignation.hasMany(User, {foreignKey: "userId"});
  User.belongTo(Asignation, {foreignKey: "userId"});

  Asignation.hasMany(Product, {foreignKey: "productId"});
  Product.belongTo(Asignation, {foreignKey: "productId"});
}

module.exports = initModel;