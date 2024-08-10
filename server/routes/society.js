import express from 'express';
import addSocietyInfo from '../controllers/society/addSocietyInfo.js';
import deleteSocietyInfo from '../controllers/society/deleteSocietyInfo.js';
import updateSocietyInfo from '../controllers/society/updateSocietyInfo.js';

const router = express.Router();

router.delete('/:societyId', deleteSocietyInfo);
router.post('/:societyId', addSocietyInfo);
router.put('/:societyId', updateSocietyInfo);

export default router;