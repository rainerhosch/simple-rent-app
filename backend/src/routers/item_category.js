const express = require("express");
const categoryItemRouter = express.Router();
const categoryItemController = require("../controllers/item_category");

/**
 *  End point route of categoryItem services
 */
categoryItemRouter.post("/create", categoryItemController.categoryItemCreate);
categoryItemRouter.get("/getAll", categoryItemController.categoryItemFindAll);
categoryItemRouter.post(
  "/getOne/:id",
  categoryItemController.categoryItemFindById
);
categoryItemRouter.patch("/edit/:id", categoryItemController.categoryItemEdit);
categoryItemRouter.delete(
  "/delete/:id",
  categoryItemController.categoryItemDelete
);

// Export
module.exports = categoryItemRouter;
