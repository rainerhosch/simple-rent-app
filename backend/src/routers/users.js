const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/users");
// const Post = require("./models/users"); // new
// const { checkToken, checkUser } = require("../middlewares/authorize");
// const { uploadHandleUsers } = require("../controllers/upload");

// Get user
userRouter.get("/", userController.homeUser);
// userRouter.post("/user", checkToken, userController.userData);
userRouter.post("/create", userController.createUser);
userRouter.get("/getAll", userController.userData);
userRouter.get("/getOne/:id", userController.userData);
userRouter.put("/edit", userController.editUser);
userRouter.delete("/delete", userController.deleteUser);

module.exports = userRouter;
