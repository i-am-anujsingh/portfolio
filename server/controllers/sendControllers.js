const Achievements = require('../models/achievementModel.js');
const Projects = require('../models/projectModel.js');
const Skills = require('../models/skillModel.js');

const sendProjects = async (req,res)=>{
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

const sendSkills = async (req,res)=>{
  try {
    const skills = await Skills.find();
    res.status(200).json({
      message:'File send successfully!',
      success:true,
      skills,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:'Some Error Occured While Extracting Skills',
      success:false,
    })
  }
}

module.exports = {sendProjects,sendAchievements,sendSkills};