// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  pdfs: [
    {
      originalname: String,
      filename: String,
      path: String,
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
