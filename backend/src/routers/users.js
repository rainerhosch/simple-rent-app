const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/users");
// const { checkToken, checkUser } = require("../middlewares/authorize");
const { uploadHandleUsers } = require("../controllers/upload");

// Get user
// userRouter.post("/user", checkToken, userController.userData);
userRouter.get("/", userController.homeUser);
userRouter.post("/create", uploadHandleUsers, userController.createUsers);
userRouter.get("/getAll", userController.findAllUsers);
userRouter.get("/getOne/:id", userController.findByIdUsers);
userRouter.patch("/edit/:id", uploadHandleUsers, userController.editUsers);
userRouter.delete("/delete/:id", userController.deleteUsers);

module.exports = userRouter;
