const Message = require("../models/Message.js")

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ 
      name:name,
      email:email,
      message:message 
    
    });
    await newMessage.save();
    res.status(200).json({
      message:'Message saved!',
      messageData: newMessage,
    });
  } catch (err) {
    res.status(500).json('Failed to save message');
  }
}