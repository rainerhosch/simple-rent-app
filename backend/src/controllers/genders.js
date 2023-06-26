const genderModel = require("../schemas/genders");
const responseHelper = require("../helpers/sendResponse");

const createGenders = async (req, res) => {
  try {
    const fieldFilter = req.body.email;
    const cekExist = await genderModel.findOne({
      email: [fieldFilter],
    });
    if (cekExist === null) {
      const dataToSave = genderModel.insertMany(req.body);
      res.status(200).json({
        message: "success create data",
        data: dataToSave,
        status: true,
      });
    } else {
      res.status(403).json({
        message: `Data gender dengan email (${fieldFilter}) sudah ada.`,
        data: cekExist,
        status: false,
      });
    }
    // res.send(cekExist);
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: null,
      status: false,
    });
  }
};

// Method for find all gender datas
const findAllGenders = async (req, res) => {
  try {
    console.log(req.params.id);
    const dataGender = await genderModel.find({});
    if (dataGender.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataGender,
        status: true,
      });
    } else {
      res.status(404).json({
        message: "Data kosong, silahkan input data.",
        data: null,
        status: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: null,
      status: false,
    });
  }
};
// Method for find gender datas by IDs
const findByIdGenders = async (req, res) => {
  try {
    const dataGender = await genderModel.find({ _id: req.params.id });
    if (dataGender.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataGender,
        status: true,
      });
    } else {
      res.status(404).json({
        message: "Data dengan Id tersebut tidak ditemukan.",
        data: null,
        status: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: null,
      status: false,
    });
  }
};

// Method for edit gender datas
const editGenders = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const cekExist = await genderModel.findOne({
      _id: id,
    });
    if (cekExist === null) {
      res.status(200).json({
        message: `Data tidak ditemukan!`,
        data: {
          id: id,
        },
        status: false,
      });
    } else {
      updatedData.update_at = Date.now();
      const data = await genderModel.findByIdAndUpdate(
        id,
        updatedData,
        options
      );
      res.status(200).json({
        message: `Data gender ${data.gender_name}, berhasil diupdate!`,
        data: {
          id: id,
          befor_update: cekExist,
          after_update: data,
          update_param: req.body,
        },
        status: true,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: error,
      status: false,
    });
  }
};

// Method for delete gender datas
const deleteGenders = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await genderModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: `Data gender ${data.gender_name}, berhasil dihapus!`,
      data: id,
      status: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: error,
      status: false,
    });
  }
};
module.exports = {
  createGenders,
  findAllGenders,
  findByIdGenders,
  editGenders,
  deleteGenders,
};
