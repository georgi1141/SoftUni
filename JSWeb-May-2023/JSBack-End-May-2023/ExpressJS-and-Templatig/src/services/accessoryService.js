const Accessory = require("../models/Accessory");

exports.create = (accessoryData) => {
  Accessory.create(accessoryData);
};

exports.getAll = async () => {
  let res = await Accessory.find().lean();

  return res;
};

exports.getOthers = (accessoryIDs) =>
  Accessory.find({ _id: { $nin: accessoryIDs } });
