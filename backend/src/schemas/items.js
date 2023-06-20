const mongoose = require("mongoose");

const schema = mongoose.Schema({
  item_name: {
    require: true,
    type: String,
  },
  item_type: {
    require: true,
    type: String,
  },
  item_brand: {
    require: true,
    type: String,
  },
  total_items: {
    require: true,
    type: String,
  },
  item_image: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("items", schema);
