// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    trim: true
  }
  
});
module.exports = mongoose.model('User', userSchema);