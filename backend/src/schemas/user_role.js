const mongoose = require("mongoose");

const schema = mongoose.Schema({
  role_name: {
    require: true,
    type: String,
  },
  descriptions: {
    require: true,
    type: String,
  },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("roles", schema);
