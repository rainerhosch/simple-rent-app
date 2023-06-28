const transactionsModel = require("../schemas/transactions");
const fs = require("fs");

// Method for create transactions datas
const transactionsCreate = async (req, res) => {
  // res.send(cekExist);
  try {
    const uploadedImg = req.file;
    const dataToSave = req.body;
    if (uploadedImg !== undefined) {
      dataToSave.transaction_detail.payment_image = uploadedImg;
    } else {
      for (const key in dataToSave) {
        dataToSave[key].transaction_detail.payment_image = {
          fieldname: "payment_image",
          originalname: "payment_image-default.png",
          mimetype: "image/png",
          destination: "./public/img/transactions",
          filename: "payment_image-default.png",
          path: "public\\img\\transactions\\payment_image-default.png",
        };
      }
      // console.log(uploadedImg);
      const savedData = transactionsModel.insertMany(dataToSave);
      res.status(200).json({
        message: "success create data",
        data: dataToSave,
        status: true,
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

// Method for find transactions datas
const transactionsFindAll = async (req, res) => {
  try {
    // console.log(req.params.id);
    const datatransactions = await transactionsModel.find({});
    if (datatransactions.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: datatransactions,
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

const transactionsFindById = async (req, res) => {
  try {
    const datatransactions = await transactionsModel.find({
      _id: req.params.id,
    });
    if (datatransactions.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: datatransactions,
        status: true,
      });
    } else {
      res.status(404).json({
        message: `Data transaksi dengan Id: ${req.params.id}, tidak ditemukan.`,
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

// Method for edit transactions datas
const transactionsEdit = async (req, res) => {
  try {
    const uploadedImg = req.file;
    console.log(req.file);
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const cekExist = await transactionsModel.findOne({
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
      if (uploadedImg !== undefined) {
        let imgData = { payment_image: uploadedImg };
        updatedData.transaction_detail = imgData;
      }
      const data = await transactionsModel.findByIdAndUpdate(
        id,
        updatedData,
        options
      );
      res.status(200).json({
        message: `Data transactions ${data._id}, berhasil diupdate!`,
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

// Method for delete transactions datas
const transactionsDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const cekExist = await transactionsModel.findOne({
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
      let filePath = cekExist.transaction_detail.payment_image;
      let removeFile = {};
      if (filePath.filename !== "payment_image-default.png") {
        const value = "./public/img/transactions/" + filePath.filename;
        removeFile = fs.unlinkSync(value);
      }
      const data = await transactionsModel.findByIdAndDelete({ _id: id });
      res.status(200).json({
        message: `Data transactions ${data._id}, berhasil dihapus!`,
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
  transactionsCreate,
  transactionsFindAll,
  transactionsFindById,
  transactionsEdit,
  transactionsDelete,
};
