const mongoose = require("mongoose");

const schema = mongoose.Schema({
  category_name: {
    unique: true,
    require: true,
    type: String,
  },
  descriptions: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("item_category", schema);
