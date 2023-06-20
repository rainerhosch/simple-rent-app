const mongoose = require("mongoose");
const schema = mongoose.Schema({
  // id: Number,
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  image: {
    require: true,
    type: String,
  },
  phone: {
    require: true,
    type: String,
  },
  active_year: {
    require: true,
    type: String,
  },
  gender_id: {
    require: true,
    type: String,
  },
  address: {
    require: true,
    type: String,
  },
  dob: { type: Date },
  roles_id: {
    require: true,
    type: Number,
  },
  pin_verify: {
    require: true,
    type: Number,
  },
  status: {
    require: true,
    type: String,
  },
  pin_reset_pass: {
    require: true,
    type: Number,
  },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", schema);
