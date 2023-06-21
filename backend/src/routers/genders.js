const express = require("express");
const genderRouter = express.Router();
const genderController = require("../controllers/genders");

/**
 *  End point route of genders services
 */
genderRouter.post("/create", genderController.createGenders);
genderRouter.get("/getAll", genderController.findAllGenders);
genderRouter.get("/getOne/:id", genderController.findByIdGenders);
genderRouter.patch("/edit/:id", genderController.editGenders);
genderRouter.delete("/delete/:id", genderController.deleteGenders);

// Export
module.exports = genderRouter;
