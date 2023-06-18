const mongoose = require("mongoose");

// const schema = mongoose.Schema({
//   // id: Number,
//   name: String,
//   email: String,
//   passwor: String,
//   image: String,
//   phone: String,
//   active_year: String,
//   gender_id: Number,
//   address: String,
//   dob: { type: Date },
//   roles_id: Number,
//   pin_verify: Number,
//   status: String,
//   pin_reset_pass: Number,
//   create_at: { type: Date, default: Date.now },
//   update_at: { type: Date, default: Date.now },
// });
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
    type: Number,
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
