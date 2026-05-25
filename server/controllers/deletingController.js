import connectDB from '../config/ConnectDatabes.js';
const mydb = await connectDB();
import { ObjectId } from "mongodb";

const deleteSkills = async (req,res)=>{
  const Skills = mydb.collection("skills");
  
  const {id} = req.params;

  console.log('inside controller: ',id);

  try {
    await Skills.deleteOne({ _id: new ObjectId(id)
 });

    return res.status(201).json({
      message:'Skill Deleted Successfully!',
      success:true,
    })

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:'Some Error Occured!',
      success:false,
    })
  }
}

export {deleteSkills};