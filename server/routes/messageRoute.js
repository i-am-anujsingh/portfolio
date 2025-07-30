const express = require("express");
const router = express.Router();
const {
sendMessage
} = require("../controllers/messageController.js");
// const verifyToken = require("../middlewares/authMiddleware");

router.post("/send", sendMessage);

module.exports = router; 