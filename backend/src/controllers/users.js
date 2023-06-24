const userModel = require("../schemas/users");
const bcrypt = require("bcrypt");
const fs = require("fs");

const homeUser = (req, res) => {
  res.status(200).json({ message: "Hi from service users." });
};

// Method for create user datas
const createUsers = async (req, res) => {
  try {
    const uploadedImg = req.file;
    const fieldFilter = req.body.email;
    const cekExist = await userModel.findOne({
      email: [fieldFilter],
    });
    if (cekExist === null) {
      const dataToSave = req.body;
      for (i = 0; i < dataToSave.length; i++) {
        const salt = await bcrypt.genSalt(10);
        var dataPass = dataToSave[i].password;
        if (dataPass == null || dataToSave[i].password == "") {
          dataPass = "default";
        }
        dataToSave[i].password = await bcrypt.hash(dataPass, salt);
      }
      if (uploadedImg !== undefined) {
        dataToSave.image = uploadedImg;
      } else {
        dataToSave.image = "user-default.jpg";
      }
      const savedData = userModel.insertMany(dataToSave);
      res.status(200).json({
        message: "success create data",
        data: savedData,
        status: true,
      });
    } else {
      res.status(403).json({
        message: `Data user dengan email (${fieldFilter}) sudah ada.`,
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

// Method for find all user datas
const findAllUsers = async (req, res) => {
  try {
    console.log(req.params.id);
    const dataUser = await userModel.find({});
    if (dataUser.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataUser,
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
// Method for find user datas by IDs
const findByIdUsers = async (req, res) => {
  try {
    const dataUser = await userModel.find({ _id: req.params.id });
    if (dataUser.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataUser,
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

// Method for edit user datas
const editUsers = async (req, res) => {
  try {
    const uploadedImg = req.file;
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const cekExist = await userModel.findOne({
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
      updatedData.image = uploadedImg;
      const data = await userModel.findByIdAndUpdate(id, updatedData, options);
      res.status(200).json({
        message: `Data user ${data.name}, berhasil diupdate!`,
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

// Method for delete user datas
const deleteUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const cekExist = await userModel.findOne({
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
      let filePath = cekExist.image;
      const value = "./public/img/users/" + filePath.filename;
      if (filePath !== "user-default.jpg") {
        fs.unlinkSync(value);
      }
      const data = await userModel.findByIdAndDelete({ _id: id });
      res.status(200).json({
        message: `Data user ${cekExist.name}, berhasil dihapus!`,
        data: id,
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
module.exports = {
  homeUser,
  createUsers,
  findAllUsers,
  findByIdUsers,
  editUsers,
  deleteUsers,
};
