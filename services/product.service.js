const { Product } = require("../models/Product.model");

module.exports.getProductService = async () => {
  const products = await Product.find({});
  return products;
};
module.exports.createProductService = async (data) => {
  const product = new Product(data);
  if (product.quantity === 0) {
    product.status = "out-of-stock";
  }
  const result = await product.save();
  return result;
};

// Or Opr
// $or: [{ _id: "648403fdfc6c8c079c6a3010" }, { name: "Iphone" }],
// Not eqal opr
// status: { $ne: "discontinue" },
// gather then oprs
// quantity: { $lte: 10 },
