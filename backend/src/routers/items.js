const express = require("express");
const itemRouter = express.Router();
const itemController = require("../controllers/items");
const { uploadHandlerItems } = require("../controllers/upload");

/**
 *  End point route of item services
 */
itemRouter.post("/create", uploadHandlerItems, itemController.itemCreate);
itemRouter.get("/getAll", itemController.itemFindAll);
itemRouter.post("/getOne/:id", itemController.itemFindById);
itemRouter.patch("/edit/:id", uploadHandlerItems, itemController.itemEdit);
itemRouter.delete("/delete/:id", itemController.itemDelete);

// Export
module.exports = itemRouter;
