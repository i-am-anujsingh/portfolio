const express = require('express');
const upload = require('../middleware/multerConfig.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const {addSkills,addAchievements,addProjects} = require('../controllers/addingControllers');


const router = express.Router();

router.post('/skills',authMiddleware,addSkills);

router.post('/achievements',authMiddleware,upload.single("file"),addAchievements);

router.post('/projects',authMiddleware,upload.single("file"),addProjects);

module.exports = router;