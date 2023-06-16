const Store = require("../models/Store.model");

exports.createStoreService = async (bodyData) => {
  const result = await Store.create(bodyData);
  return result;
};
exports.getStoreService = async (queries) => {
  const result = await Store.find({});
  return result;
};
