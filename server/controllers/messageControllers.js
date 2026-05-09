import { ObjectId } from "mongodb";
import connectDB from "../database/ConnectDatabes.js";

const mydb = await connectDB();


// ================= SAVE MESSAGE =================
export const saveMessage = async (req, res) => {

  const Messages = mydb.collection("messages");

  const { name, email, subject, message } = req.body;

  try {

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newMessage = {
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    };

    await Messages.insertOne(newMessage);

    res.status(201).json({
      message: "Message has been sent successfully!",
      success: true,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Some error occurred!",
      success: false,
    });
  }
};



// ================= GET MESSAGES =================
export const sendMsgs = async (req, res) => {

  const Messages = mydb.collection("messages");

  try {

    // IMPORTANT: toArray()
    const messages = await Messages.find().toArray();

    res.status(200).json({
      message: "Messages fetched successfully!",
      success: true,
      messages,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error while fetching messages",
      success: false,
    });
  }
};



// ================= DELETE MESSAGE =================
export const deleteMsg = async (req, res) => {

  const Messages = mydb.collection("messages");

  const { id } = req.params;

  try {

    // Validate ID
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid message ID",
        success: false,
      });
    }

    const deleted = await Messages.deleteOne({
      _id: new ObjectId(id),
    });

    if (deleted.deletedCount === 0) {
      return res.status(404).json({
        message: "Message not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Deleted successfully!",
      success: true,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Some error occurred!",
      success: false,
    });
  }
};