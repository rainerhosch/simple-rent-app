// import express js & router dari express js
const express = require("express");
const mainRouter = express.Router();

// deklarasi router sub/import
const wellcomeRouter = require("./wellcome");
const userRouter = require("./users");
const genderRouter = require("./genders");
const itemRouter = require("./items");
const categoryItemRouter = require("./item_category");
const userRoleRouter = require("./user_role");

mainRouter.use("/wellcome", wellcomeRouter); //wellcome
mainRouter.use("/users", userRouter);
mainRouter.use("/genders", genderRouter);
mainRouter.use("/items", itemRouter);
mainRouter.use("/itemcategories", categoryItemRouter);
mainRouter.use("/user_role", userRoleRouter);

// express.method(endpoint, heandler1/2, dsb)
mainRouter.get("/", (require, response) => {
  response.redirect("wellcome");
});

// export main Router
module.exports = mainRouter;
