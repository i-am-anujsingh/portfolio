import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { updateSkills } from '../controllers/updatingControllers.js';


const router = express.Router();

router.put('/skills',authMiddleware,updateSkills);

// router.post('/achievements', authMiddleware,addAchievements);

// router.post('/projects',authMiddleware,addProjects);

export default router;