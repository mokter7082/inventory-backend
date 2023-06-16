const storeServices = require("../services/store.service");

exports.createStore = async (req, res, next) => {
  try {
    const bodyData = req.body;
    const result = await storeServices.createStoreService(bodyData);
    res.status(201).send({
      isSuccess: true,
      message: "Store create successfull",
      data: result,
    });
  } catch (error) {
    res.send({
      isSuccess: false,
      error: error.message,
      message: "Store can't create",
    });
  }
};

exports.getStore = async (req, res, next) => {
  try {
    const queries = {};
    if (req.query) {
      queries.page = req.query.page;
      queries.limit = req.query.limit;
    }
    const result = await storeServices.getStoreService(queries);
    res.status(200).send({
      isSuccess: true,
      message: "All stored are returned",
      data: result,
    });
  } catch (error) {
    res.send({
      isSuccess: false,
      error: error.message,
      message: "Store can't create",
    });
  }
};
