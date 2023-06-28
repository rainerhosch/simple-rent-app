const itemModel = require("../schemas/items");
const fs = require("fs");

// Method for create item datas
const itemCreate = async (req, res) => {
  // res.send(cekExist);
  try {
    const uploadedImg = req.files;
    const fieldFilter = req.body.item_name;
    const cekExist = await itemModel.findOne({
      item_name: [fieldFilter],
    });
    if (cekExist === null) {
      const dataToSave = req.body;
      if (uploadedImg !== undefined) {
        dataToSave.item_image = uploadedImg;
      } else {
        for (const key in dataToSave) {
          dataToSave[key].item_image = {
            fieldname: "item_image",
            originalname: "item_image-default.png",
            mimetype: "image/png",
            destination: "./public/img/items",
            filename: "item_image-default.png",
            path: "public\\img\\items\\item_image-default.png",
          };
        }
      }
      // console.log(uploadedImg);
      const savedData = itemModel.insertMany(dataToSave);
      res.status(200).json({
        message: "success create data",
        data: dataToSave,
        status: true,
      });
    } else {
      res.status(403).json({
        message: `Data items (${fieldFilter}) sudah ada.`,
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

// Method for find item datas
const itemFindAll = async (req, res) => {
  try {
    console.log(req.params.id);
    const dataitem = await itemModel.find({});
    if (dataitem.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataitem,
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

const itemFindById = async (req, res) => {
  try {
    const dataitem = await itemModel.find({ _id: req.params.id });
    if (dataitem.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataitem,
        status: true,
      });
    } else {
      res.status(404).json({
        message: `Data dengan Id ${req.params.id} tersebut tidak ditemukan.`,
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

// Method for edit item datas
const itemEdit = async (req, res) => {
  const uploadedImg = req.files;
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const cekExist = await itemModel.findOne({
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
        let img_data = {};
        for (const key in uploadedImg) {
          const value = uploadedImg[key];
          img_data[key] = value;
        }
        updatedData.item_image = img_data;
      }
      const data = await itemModel.findByIdAndUpdate(id, updatedData, options);
      res.status(200).json({
        message: `Data item ${data.item_name}, berhasil diupdate!`,
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

// Method for delete item datas
const itemDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const cekExist = await itemModel.findOne({
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
      let filePath = cekExist.item_image;
      let dirFile = {};
      for (const key in filePath) {
        const value = "./public/img/items/" + filePath[key].filename;
        if (filePath.filename !== "item_image-default.png") {
          dirFile[key] = fs.unlinkSync(value);
        }
      }
      const data = await itemModel.findByIdAndDelete({ _id: id });
      res.status(200).json({
        message: `Data item ${data.item_name}, berhasil dihapus!`,
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
  itemCreate,
  itemFindAll,
  itemFindById,
  itemEdit,
  itemDelete,
};
