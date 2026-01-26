const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title:{
    type: String,
    required:true,
    trim: true,
  },
  role:{
    type: String,
    trim: true,
  },
  technology:{
    type: String,
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
  repo:{
    type: String,
    trim: true,
  },
  weblink:{
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Projects', projectSchema);

