import connectDB from '../database/ConnectDatabes.js';
const mydb = connectDB();

export const saveMessage = async (req,res) =>{
  const Messages = mydb.collection("messages");
  const {name, email, subject, message} = req.body;
  
  try {
    const newMessage = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }
    
    await Messages.insertOne(newMessage);
    
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

export const sendMsgs = async (req,res)=>{
  const Messages = mydb.collection("messages");
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

export const deleteMsg = async(req,res)=>{
  const Messages = mydb.collection("messages");
  const {id} = req.params;
  try {
    const deleted = await Messages.deleteOne({_id:id});
    res.status(200).json({
      message:'Deleted successfully!',
      success:true,
    })
  } catch (error) {
    console.error(error);
  }
}
