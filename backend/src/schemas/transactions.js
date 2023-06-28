const mongoose = require("mongoose");

const schema = mongoose.Schema({
  user_id: {
    require: true,
    type: String,
  },
  transaction_status: {
    require: true,
    type: Object,
  },
  transaction_detail: {
    require: true,
    type: Object,
  },
  create_at: { require: true, type: Date, default: Date.now },
  update_at: { require: true, type: Date, default: Date.now },
});

module.exports = mongoose.model("transactions", schema);
