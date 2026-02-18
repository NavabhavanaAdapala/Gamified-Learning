// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  // <--- Name is now mandatory
  },
  email: {
    type: String,
    required: true,
    unique: true    // <--- No duplicate emails allowed
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // <--- Automatically saves signup time
  }
});

module.exports = mongoose.model('User', UserSchema);