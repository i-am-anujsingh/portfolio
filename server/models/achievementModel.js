const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema({
  title:{
    type: String,
    required:true,
    trim: true,
  },
  detail:{
    type: String,
    trim: true,
  },
  path:{
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Achievements', achievementSchema);

