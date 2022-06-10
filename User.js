const mongoose = require("mongoose");

const Users = mongoose.model("User", {
  name: { type: String, required: true, minLength: 3 },
  lasname: { type: String, required: true, minLength: 3 },
});

module.exports = { Users };
