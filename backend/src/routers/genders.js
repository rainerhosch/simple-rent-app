const express = require("express");
const genderRouter = express.Router();
const genderController = require("../controllers/genders");

/**
 *  End point route of genders services
 */
genderRouter.post("/create", genderController.genderCreate);
genderRouter.get("/getAll", genderController.genderData);
genderRouter.get("/getOne/:id", genderController.genderData);
genderRouter.put("/edit", genderController.genderEdit);
genderRouter.delete("/delete", genderController.genderDelete);

// Export
module.exports = genderRouter;
