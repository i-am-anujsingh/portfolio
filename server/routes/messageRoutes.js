import express from 'express';
import { saveMessage, sendMsgs, deleteMsg } from '../controllers/messageControllers.js';

const router = express.Router();

router.post('/save',saveMessage);
router.get('/getall',sendMsgs);
router.delete("/:id",deleteMsg);

export default router;