import connectDB from '../config/ConnectDatabes.js';
const mydb = await connectDB();
import { ObjectId } from "mongodb";

const deleteSkills = async (req,res)=>{
  const Skills = mydb.collection("skills");
  
  const {id} = req.params;

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

const deleteProjects = async (req,res)=>{
  const Projects = mydb.collection("projects");
  
  const {id} = req.params;

  try {
    await Projects.deleteOne({ _id: new ObjectId(id)
 });

    return res.status(201).json({
      message:'Project Deleted Successfully!',
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

const deleteAchievements = async (req,res)=>{
  const Achievements = mydb.collection("achievements");
  
  const {id} = req.params;

  try {
    await Achievements.deleteOne({ _id: new ObjectId(id)
 });

    return res.status(201).json({
      message:'Achievement Deleted Successfully!',
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

export {deleteSkills, deleteProjects, deleteAchievements};