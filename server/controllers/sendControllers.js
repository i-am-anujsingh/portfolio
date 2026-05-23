import connectDB from '../config/ConnectDatabes.js';
import dotenv from 'dotenv';

dotenv.config();

const mydb = await connectDB();


// ================= SEND PROJECTS =================
const sendProjects = async (req, res) => {

  const Projects = mydb.collection("projects");

  try {

    const projects = await Projects.find().toArray();

    res.status(200).json({
      message: 'Projects fetched successfully!',
      success: true,
      projects,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: 'Some error occurred while extracting projects.',
      success: false,
    });
  }
};



// ================= SEND ACHIEVEMENTS =================
const sendAchievements = async (req, res) => {

  const Achievements = mydb.collection("achievements");

  try {

    const achievements = await Achievements.find().toArray();

    res.status(200).json({
      message: 'Achievements fetched successfully!',
      success: true,
      achievements,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: 'Some error occurred while extracting achievements.',
      success: false,
    });
  }
};



// ================= SEND SKILLS =================
const sendSkills = async (req, res) => {

  const Skills = mydb.collection("skills");

  try {

    const skills = await Skills.find().toArray();

    res.status(200).json({
      message: "Skills fetched successfully!",
      success: true,
      skills,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};


export {
  sendProjects,
  sendAchievements,
  sendSkills
};