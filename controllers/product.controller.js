const { Product } = require("../models/Product.model");
const productService = require("../services/product.service");

module.exports.saveProduct = async (req, res, next) => {
  try {
    const result = await productService.createProductService(req.body);
    res.status(201).send({
      isSuccess: true,
      message: "Product create successfull",
      data: result,
    });
  } catch (error) {
    res.status(403).send({
      isSuccess: false,
      error: error.message,
      message: "Product can't create",
    });
  }
};

module.exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProductService();
    res.status(200).json({
      isSuccess: true,
      message: "Product are returned",
      data: products,
    });
  } catch (error) {
    res.status(403).send({
      error: error.message,
      message: "product can't get",
    });
  }
};

module.exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = await Product.updateOne({ _id: id }, { $set: req.body });
    res.status(201).send({
      isSuccess: true,
      message: "Update successfull",
      data: update,
    });
  } catch (error) {
    res.send({
      isSuccess: false,
      error: error.message,
      message: "Should not update product",
    });
  }
};
