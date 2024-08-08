import express from 'express';
import addSocietyInfo from '../controllers/society/addSocietyInfo.js';
import deleteSocietyInfo from '../controllers/society/deleteSocietyInfo.js';
import updateSocietyInfo from '../controllers/society/updateSocietyInfo.js';

const router = express.Router();

router.delete('/:id', deleteSocietyInfo);
router.post('/:id', addSocietyInfo);
router.put('/:id', updateSocietyInfo);

export default router;