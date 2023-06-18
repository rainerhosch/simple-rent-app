const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/users");
// const Post = require("./models/users"); // new
// const { checkToken, checkUser } = require("../middlewares/authorize");
// const { uploadHandleUsers } = require("../controllers/upload");

// Get user
// userRouter.get("/getAll", checkToken, userController.userData);
userRouter.get("/", userController.homeUser);
userRouter.get("/getOne/:id", userController.userData);
// userRouter.post("/user", checkToken, userController.userData);
userRouter.post("/create", userController.createUser);
// router.get("/posts", async (req, res) => {
//   const posts = await Post.find();
//   res.send(posts);
// });

module.exports = userRouter;
