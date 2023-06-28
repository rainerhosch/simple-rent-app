const path = require("path");
const multer = require("multer");

const uploadProfile = multer({
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, "./public/img/users");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: { fileSize: 1 * 1024 * 5120 }, //5mb
}).single("image");

const uploadTransactionsPayment = multer({
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, "./public/img/transactions");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: { fileSize: 1 * 1024 * 5120 }, //5mb
}).single("payment_image");

const uploadItem = multer({
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, "./public/img/items");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: { fileSize: 1 * 1024 * 5120 }, //5mb
}).array("item_image", 3);

module.exports = { uploadProfile, uploadItem, uploadTransactionsPayment };
