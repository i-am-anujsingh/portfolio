import express from 'express';
import upload from '../middleware/multerConfig.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { addSkills, addAchievements, addProjects } from '../controllers/addingControllers.js';


const router = express.Router();

router.post('/skills',authMiddleware,addSkills);

router.post('/achievements',authMiddleware,upload.single("file"),addAchievements);

router.post('/projects',authMiddleware,upload.single("file"),addProjects);

export default router;