import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { deleteSkills } from '../controllers/deletingController.js';


const router = express.Router();

router.delete('/skills/:id', authMiddleware,deleteSkills);

// router.post('/achievements', authMiddleware,addAchievements);

// router.post('/projects',authMiddleware,addProjects);

export default router;