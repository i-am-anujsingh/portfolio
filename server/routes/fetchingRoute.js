const express = require('express');
const {sendProjects,sendAchievements,sendSkills}  = require('../controllers/sendControllers.js');
const router = express.Router();

router.get('/achievements',sendAchievements);
router.get('/projects',sendProjects);
router.get('/skills',sendSkills);

module.exports = router;