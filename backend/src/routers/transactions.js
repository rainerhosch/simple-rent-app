const express = require("express");
const transactionRouter = express.Router();
const transactionsController = require("../controllers/transactions");
const { uploadHandlerTransactions } = require("../controllers/upload");

/**
 *  End point route of transactions services
 */
transactionRouter.post(
  "/create",
  uploadHandlerTransactions,
  transactionsController.transactionsCreate
);
transactionRouter.get("/getAll", transactionsController.transactionsFindAll);
transactionRouter.post(
  "/getOne/:id",
  transactionsController.transactionsFindById
);
transactionRouter.patch(
  "/edit/:id",
  uploadHandlerTransactions,
  transactionsController.transactionsEdit
);
transactionRouter.delete(
  "/delete/:id",
  transactionsController.transactionsDelete
);

// Export
module.exports = transactionRouter;
