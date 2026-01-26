const Skills = require('../models/skillModel.js');
const Achievements = require('../models/achievementModel.js');
const Projects = require('../models/projectModel.js');

const addSkills = async (req,res)=>{
  
  const {skillData,skill} = req.body;
  try {
    const newSkill = new Skills({
      area: skillData.area,
      skills: skill,
      detail: skillData.detail,
    })
    await newSkill.save();
    return res.status(201).json({
      message:'Skill Added Successfully!',
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

const addAchievements = async (req,res)=>{
  const {title, detail} = req.body;
  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded",
      success:false,
    });
  }
  try {
    const newAchievement = new Achievements({
      title : title,
      detail: detail,
      path: 'server/'+req.file.path
    })
    
    await newAchievement.save();
    
    res.status(201).json({
      message:'File uploaded successfully!',
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

const addProjects = async (req,res)=>{
  const {title, role, technology, detail, repo, weblink} = req.body;
  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded",
      success:false,
    });
  }
  try {
    const newProject = new Projects({
      title : title,
      role: role,
      technology: technology,
      detail: detail,
      path: 'server/'+req.file.path,
      repo,
      weblink,
    })
    
    await newProject.save();
    
    res.status(201).json({
      message:'File uploaded successfully!',
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

module.exports = {addSkills,addAchievements,addProjects};