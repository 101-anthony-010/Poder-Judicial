const ModelProduct = require("./modelProduct.model")
const Product = require("./product.model")

const initModel = () => {
  Product.hasMany(ModelProduct, {foreignKey: "modelId"});
  ModelProduct.belongTo(Product, {foreignKey: "modelId"});
}

module.exports = initModel;