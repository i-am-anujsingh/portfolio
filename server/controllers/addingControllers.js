import connectDB from '../config/ConnectDatabes.js';
const mydb = await connectDB();

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
  const Achievements = mydb.collection("achievements");

  const {title, detail, src} = req.body;

  try {

    const imageUrl = `https://lh3.googleusercontent.com/d/${src}`;

    const newAchievement = {
      title : title,
      detail: detail,
      src: imageUrl
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

  const {title, role, technology, detail, repo, weblink, src} = req.body;
  
  try {

    const imageUrl = `https://lh3.googleusercontent.com/d/${src}`;

    const newProject = {
      title : title,
      role: role,
      technology: technology,
      detail: detail,
      src: imageUrl,
      repo: repo,
      weblink: weblink,
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