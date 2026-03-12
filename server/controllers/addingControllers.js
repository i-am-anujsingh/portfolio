import connectDB from '../database/ConnectDatabes.js';
const mydb = connectDB();

const addSkills = async (req,res)=>{
  const Skills = mydb.collection("skills");
  
  const {skillData,skill} = req.body;

  try {
    const newSkill = {
      area: skillData.area,
      skills: skill,
      detail: skillData.detail,
    }

    await Skills.insertOne(newSkill);

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
  const Achievements = mydb.collection("achivements");

  const {title, detail} = req.body;

  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded",
      success:false,
    });
  }
  try {
    const newAchievement = {
      title : title,
      detail: detail,
      path: 'server/'+req.file.path
    }
    
    await Achievements.insertOne(newAchievement);
    
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
  const Projects = mydb.collection("projects");

  const {title, role, technology, detail, repo, weblink} = req.body;
  
  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded",
      success:false,
    });
  }
  
  try {
    const newProject = {
      title : title,
      role: role,
      technology: technology,
      detail: detail,
      path: 'server/'+req.file.path,
      repo,
      weblink,
    }
    
    await Projects.insertOne(newProject);
    
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
  
export { addSkills, addAchievements, addProjects };