const userModel = require("../schemas/users");
const responseHelper = require("../helpers/sendResponse");

const homeUser = (req, res) => {
  res.status(200).json({ message: "Hi from service users." });
};
const createUser = async (req, res) => {
  try {
    const dataToSave = await userModel.insertMany(req.body);
    res.status(200).json({
      message: "success create data",
      data: dataToSave,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: null,
    });
  }
};
const userData = async (req, res) => {
  try {
    const dataUser = await userModel.find({});
    if (dataUser.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataUser,
      });
    } else {
      res.status(200).json({
        message: "Data kosong, silahkan input data.",
        data: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: null,
    });
  }
};

const editUser = (req, res) => {};

const editPassword = (req, res) => {};

// upgrade user to role 3
const upgradeUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  homeUser,
  createUser,
  userData,
  editUser,
  editPassword,
  upgradeUser,
  deleteUser,
};
