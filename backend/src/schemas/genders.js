const mongoose = require("mongoose");

const schema = mongoose.Schema({
  gender_name: {
    unique: true,
    require: true,
    type: String,
  },
  initial: {
    unique: true,
    require: true,
    type: String,
  },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("genders", schema);
