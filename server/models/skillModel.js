const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  area:{
    type: String,
    required:true,
    trim: true,
  },
  skills:{
    type:[String],
    required: true,
  },
  detail:{
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Skills', skillSchema);

