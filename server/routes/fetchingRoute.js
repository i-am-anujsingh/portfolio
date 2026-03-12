import express from 'express';
import {sendProjects,sendAchievements,sendSkills} from '../controllers/sendControllers.js';
const router = express.Router();

router.get('/achievements',sendAchievements);
router.get('/projects',sendProjects);
router.get('/skills',sendSkills);

export default router;