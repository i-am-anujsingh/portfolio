import connectDB from '../database/ConnectDatabes.js';
const mydb = connectDB();

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const sendProjects = async (req,res)=>{
  const Projects = mydb.collection("projects");
  try {
    const projects = await Projects.find();
    res.status(200).json({
      message:'File send successfully!',
      success:true,
      projects,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:'Some Error Occured While Extracting Projects.',
      success:false,
    })
  }
}

const sendAchievements = async (req,res)=>{
  const Achievements = mydb.collection("achievements");
  try {
    const achievements = await Achievements.find();
    res.status(200).json({
      message:'File send successfully!',
      success:true,
      achievements,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:'Some Error Occured While Extracting Achievement.',
      success:false,
    })
  }
}

const sendSkills = async (req, res) => {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();

    console.log("fails from here");
    const DB = client.db(process.env.DATABASE);
    const Skills = DB.collection("skills");
    const skills = await Skills.find().toArray();

    res.status(200).json({
      message: "File sent successfully!",
      success: true,
      skills,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
      success: false,
    });
  } finally {
    await client.close();
  }
};


export {sendProjects,sendAchievements,sendSkills};