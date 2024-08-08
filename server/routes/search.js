import express from 'express';
import { 
  getStates, 
  getCities, 
  getColleges, 
  getSocieties, 
  getSociety 
} from '../controllers/search.js';

const router = express.Router();

router.get('/states', getStates);
router.get('/:stateId/cities', getCities);
router.get('/:stateId/:cityId/colleges', getColleges);
router.get('/:stateId/:cityId/:collegeId/societies', getSocieties);
router.get('/:stateId/:cityId/:collegeId/:societyId', getSociety);

export default router;
