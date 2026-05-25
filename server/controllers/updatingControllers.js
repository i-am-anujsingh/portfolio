import connectDB from '../config/ConnectDatabes.js';
const mydb = await connectDB();
import { ObjectId } from "mongodb";

const updateSkills = async (req,res)=>{
  const Skills = mydb.collection("skills");
  
  const {skillData,skill} = req.body;
  
  const {id} = skillData;

  try {
    await Skills.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          area: skillData.area,
          skills: skill,
          detail: skillData.detail,
        },
      }
    );

    return res.status(200).json({
      message: "Skill Updated Successfully!",
      success: true,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:'Some Error Occured!',
      success:false,
    })
  }
}

export {updateSkills};