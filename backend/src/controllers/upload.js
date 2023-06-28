const upload = require("../middlewares/upload");

const uploadHandleUsers = (req, res, next) => {
  upload.uploadProfile(req, res, (err) => {
    if (err && err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ msg: "Ukuran file melebihi batas" });
    } else if (err) {
      const { body } = req;
      console.log(body);
      console.log(err);
      return res.status(401).json({ msg: "Just JPG, PNG, JPEG formated" });
    }
    next();
  });
};
const uploadHandlerTransactions = (req, res, next) => {
  upload.uploadTransactionsPayment(req, res, (err) => {
    if (err && err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ msg: "Ukuran file melebihi batas" });
    } else if (err) {
      const { body } = req;
      console.log(body);
      console.log(err);
      return res.status(401).json({ msg: "Just JPG, PNG, JPEG formated" });
    }
    next();
  });
};

const uploadHandlerItems = (req, res, next) => {
  upload.uploadItem(req, res, (err) => {
    if (err && err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ msg: "Ukuran file melebihi batas" });
    } else if (err) {
      console.log(err);
      return res.status(401).json({ msg: "Just JPG, PNG, JPEG formated" });
    }
    next();
  });
};

module.exports = {
  uploadHandleUsers,
  uploadHandlerItems,
  uploadHandlerTransactions,
};
