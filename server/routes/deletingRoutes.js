import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { deleteSkills, deleteProjects, deleteAchievements } from '../controllers/deletingController.js';


const router = express.Router();

router.delete('/skills/:id', authMiddleware,deleteSkills);

router.delete('/achievements/:id', authMiddleware,deleteAchievements);

router.delete('/projects/:id',authMiddleware,deleteProjects);

export default router;