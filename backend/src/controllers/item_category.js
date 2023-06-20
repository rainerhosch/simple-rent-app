const categoryItemModel = require("../schemas/item_category");
const responseHelper = require("../helpers/sendResponse");

// Method for create category datas
const categoryItemCreate = async (req, res) => {
  // res.send(cekExist);
  try {
    const fieldFilter = req.body.category_name;
    const cekExist = await categoryItemModel.findOne({
      category_name: [fieldFilter],
    });
    if (cekExist === null) {
      const dataToSave = categoryItemModel.insertMany(req.body);
      res.status(200).json({
        message: "success create data",
        data: dataToSave,
        status: true,
      });
    } else {
      res.status(403).json({
        message: "Data sudah ada.",
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

// Method for find category datas
const categoryItemFindAll = async (req, res) => {
  try {
    console.log(req.params.id);
    const dataCategory = await categoryItemModel.find({});
    if (dataCategory.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataCategory,
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

const categoryItemFindById = async (req, res) => {
  try {
    const dataCategory = await categoryItemModel.find({ _id: req.params.id });
    if (dataCategory.length > 0) {
      res.status(200).json({
        message: "Data tersedia.",
        data: dataCategory,
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

// Method for edit category datas
const categoryItemEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const data = await categoryItemModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(data);
    // const update = categoryItemModel.save();
    // res.status(200).json({
    //   message: `Data category ${data.category_name}, berhasil dihapus!`,
    //   data: id,
    //   status: true,
    // });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: error,
      status: false,
    });
  }
};

// Method for delete category datas
const categoryItemDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await categoryItemModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: `Data category ${data.category_name}, berhasil dihapus!`,
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
  categoryItemCreate,
  categoryItemFindAll,
  categoryItemFindById,
  categoryItemEdit,
  categoryItemDelete,
};
