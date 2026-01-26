const express = require('express');
const {saveMessage,sendMsgs,deleteMsg} = require('../controllers/messageControllers');

const router = express.Router();

router.post('/save',saveMessage);
router.get('/getall',sendMsgs);
router.delete("/:id",deleteMsg);


module.exports = router;