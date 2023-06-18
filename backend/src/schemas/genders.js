const mongoose = require("mongoose");

const schema = mongoose.Schema({
  gender_name: {
    require: true,
    type: String,
  },
  initial: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("genders", schema);
