const Asignation = require("./asignation.model");
const Cargo = require("./cargo.model");
const Dependencia = require("./dependencia.model");
const ModelProduct = require("./modelProduct.model")
const Product = require("./product.model");
const Sede = require("./sede.model");
const User = require("./user.model");

const initModel = () => {
  Product.hasMany(ModelProduct, {foreignKey: "modelId"});
  ModelProduct.belongsTo(Product, {foreignKey: "modelId"});

  User.hasMany(Sede, {foreignKey: "sedeId"});
  Sede.belongsTo(User, {foreignKey: "sedeId"});

  User.hasMany(Dependencia, {foreignKey: "dependenciaId"});
  Dependencia.belongsTo(User, {foreignKey: "dependenciaId"});

  User.hasMany(Cargo, {foreignKey: "cargoId"});
  Cargo.belongsTo(User, {foreignKey: "cargoId"});

  Asignation.hasMany(User, {foreignKey: "userId"});
  User.belongsTo(Asignation, {foreignKey: "userId"});

  Asignation.hasMany(Product, {foreignKey: "productId"});
  Product.belongsTo(Asignation, {foreignKey: "productId"});
}

module.exports = initModel;