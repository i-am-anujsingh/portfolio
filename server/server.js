// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const messageRoute = require('./routes/messageRoute.js');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!!'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/sendmessage/send',messageRoute);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));