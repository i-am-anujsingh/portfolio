const Messages = require('../models/messageModel.js');

const saveMessage = async (req,res) =>{
  const {name, email, subject, message} = req.body;
  try {
    const newMessage = new Messages({
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
    
    await newMessage.save();
    
    res.status(201).json({
      message:'Message has been send successfully!',
      success:true,
    })
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:'Some Error Occured!',
      success:false,
    })
  }
}

const sendMsgs = async (req,res)=>{
  try {
    const messages = await Messages.find();
    res.status(200).json({
      message:'File send successfully!',
      success:true,
      messages,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:'Some Error Occured While Extracting Skills',
      success:false,
    })
  }
}

const deleteMsg = async(req,res)=>{
  const {id} = req.params;
  try {
    const deleted = await Messages.findByIdAndDelete(id);
    res.status(200).json({
      message:'Deleted successfully!',
      success:true,
    })
  } catch (error) {
    console.error(error);
  }
}


module.exports = {saveMessage,sendMsgs,deleteMsg};