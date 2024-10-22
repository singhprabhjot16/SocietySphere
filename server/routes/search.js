import express from 'express';
import { 
  getStates, 
  getCities, 
  getColleges, 
  getSocieties, 
  getSociety 
} from '../controllers/search.js';

const searchRoutes = (req, res) => {
  const { stateId, cityId, collegeId, societyId } = req.query;

  if (stateId && cityId && collegeId && societyId) {
      console.log(req.query);
      getSociety(req, res);
  } else if (stateId && cityId && collegeId) {
      getSocieties(req, res);
  } else if (stateId && cityId) {
      getColleges(req, res);
  } else if (stateId) {
      getCities(req, res);
  } else {
      getStates(req, res);
  }
};

export default searchRoutes;
