const userRoleModels = require("../schemas/user_role");
const responseHelper = require("../helpers/sendResponse");

// Method for create role datas
const createUserRole = async (req, res) => {
  try {
    const fieldFilter = req.body.email;
    const cekExist = await userRoleModels.findOne({
      email: [fieldFilter],
    });
    if (cekExist === null) {
      const dataToSave = userRoleModels.insertMany(req.body);
      res.status(200).json({
        message: "success create data",
        data: dataToSave,
        status: true,
      });
    } else {
      res.status(403).json({
        message: `Data role dengan email (${fieldFilter}) sudah ada.`,
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

// Method for find all role datas
const findAllUserRole = async (req, res) => {
  try {
    console.log(req.params.id);
    const dataUserRole = await userRoleModels.find({});
    if (dataUserRole.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataUserRole,
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
// Method for find role datas by IDs
const findByIdUserRole = async (req, res) => {
  try {
    const dataUserRole = await userRoleModels.find({ _id: req.params.id });
    if (dataUserRole.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataUserRole,
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

// Method for edit role datas
const editUserRole = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const cekExist = await userRoleModels.findOne({
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
      const data = await userRoleModels.findByIdAndUpdate(
        id,
        updatedData,
        options
      );
      res.status(200).json({
        message: `Data role ${data.role_name}, berhasil diupdate!`,
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

// Method for delete role datas
const deleteUserRole = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await userRoleModels.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: `Data role ${data.role_name}, berhasil dihapus!`,
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
  createUserRole,
  findAllUserRole,
  findByIdUserRole,
  editUserRole,
  deleteUserRole,
};
