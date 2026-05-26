import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { updateSkills, updateProjects, updateAchievements } from '../controllers/updatingControllers.js';


const router = express.Router();

router.put('/skills',authMiddleware,updateSkills);

router.put('/achievements', authMiddleware,updateAchievements);

router.put('/projects',authMiddleware,updateProjects);

export default router;