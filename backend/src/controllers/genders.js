const genderModel = require("../schemas/genders");
const responseHelper = require("../helpers/sendResponse");

// Method for create gender datas
const genderCreate = (req, res) => {
  try {
    const dataToSave = genderModel.insertMany(req.body);
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

// Method for find gender datas
const genderData = (req, res) => {};

// Method for edit gender datas
const genderEdit = (req, res) => {};

// Method for delete gender datas
const genderDelete = (req, res) => {};

module.exports = {
  genderCreate,
  genderData,
  genderEdit,
  genderDelete,
};
