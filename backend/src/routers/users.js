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
// userRouter.get("/img/:filename", userController.getUserImage);
userRouter.patch("/edit/:id", uploadHandleUsers, userController.editUsers);
userRouter.patch("/uploads/:id", uploadHandleUsers, function (req, res) {
  //   console.log(req.file);
});
userRouter.delete("/delete/:id", userController.deleteUsers);

module.exports = userRouter;
