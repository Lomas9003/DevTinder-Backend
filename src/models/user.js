const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  emailId: {
    type: String,
    required: true,
    unique: true
  },

  age: {
    type: Number
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;