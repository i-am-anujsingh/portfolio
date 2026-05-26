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

const updateProjects = async (req,res)=>{
  const Projects = mydb.collection("projects");
  
  const {title, role, technology, detail, repo, weblink, src, id} = req.body;
  
  try {
    await Projects.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title: title,
          role: role,
          technology: technology,
          detail: detail,
          repo: repo,
          weblink: weblink,
          src: src,
        },
      }
    );

    return res.status(200).json({
      message: "Project Updated Successfully!",
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

const updateAchievements = async (req,res)=>{
  const Achievements = mydb.collection("achievements");
  
  const {title, detail, src, id} = req.body;
  
  try {
    await Achievements.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title: title,
          detail: detail,
          src: src,
        },
      }
    );

    return res.status(200).json({
      message: "Achievement Updated Successfully!",
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

export {updateSkills, updateProjects, updateAchievements};