import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { addSkills, addAchievements, addProjects } from '../controllers/addingControllers.js';


const router = express.Router();

router.post('/skills',authMiddleware,addSkills);

router.post('/achievements', authMiddleware,addAchievements);

router.post('/projects',authMiddleware,addProjects);

export default router;