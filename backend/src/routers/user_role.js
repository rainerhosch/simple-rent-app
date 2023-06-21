const express = require("express");
const userRoleRouter = express.Router();
const userRoleController = require("../controllers/user_role");

/**
 *  End point route of user role services
 */
userRoleRouter.post("/create", userRoleController.createUserRole);
userRoleRouter.get("/getAll", userRoleController.findAllUserRole);
userRoleRouter.get("/getOne/:id", userRoleController.findByIdUserRole);
userRoleRouter.patch("/edit/:id", userRoleController.editUserRole);
userRoleRouter.delete("/delete/:id", userRoleController.deleteUserRole);

// Export
module.exports = userRoleRouter;
