const mongoose =require('mongoose');

const messageSchema= new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    trim: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    // unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  message: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Messages', messageSchema);