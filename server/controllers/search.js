import { PrismaClient } from '@prisma/client'
import { 
  getSocietyDetails, 
  getTeamsBySociety, 
  getGalleriesBySociety, 
  getAnnouncementsBySociety, 
  getAchievementsBySociety, 
  getFaqsBySociety, 
  getAlumniBySociety 
} from './readSocietyInfo.js';

const prisma = new PrismaClient();

export const getStates = async (req, res) => {
  try {
    const states = await prisma.state.findMany();
    res.json(states);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve states' });
  }
};

export const getCities = async (req, res) => {
  const { stateId } = req.params;
  try {
    const cities = await prisma.city.findMany({
      where: { stateId: parseInt(stateId, 10) },
    });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve cities' });
  }
};

export const getColleges = async (req, res) => {
  const { stateId, cityId } = req.params;
  try {
    const colleges = await prisma.college.findMany({
      where: { cityId: parseInt(cityId, 10) },
    });
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve colleges' });
  }
};

export const getSocieties = async (req, res) => {
  const { stateId, cityId, collegeId } = req.params;
  try {
    const societies = await prisma.society.findMany({
      where: { collegeId: parseInt(collegeId, 10) },
    });
    res.json(societies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve societies' });
  }
};

// export const getSociety = async (req, res) => {
//   const { stateId, cityId, collegeId, societyId } = req.params;
//   try {
//     const society = await prisma.society.findUnique({
//       where: { id: parseInt(societyId, 10) },
//     });
//     res.json(society);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve society' });
//   }
// };

export const getSociety = async (req, res) => {
  const { societyId } = req.params;
  try {
    const society = await getSocietyDetails(societyId);
    const teams = await getTeamsBySociety(societyId);
    const galleries = await getGalleriesBySociety(societyId);
    const announcements = await getAnnouncementsBySociety(societyId);
    const achievements = await getAchievementsBySociety(societyId);
    const faqs = await getFaqsBySociety(societyId);
    const alumni = await getAlumniBySociety(societyId);

    const societyInfo = {
      society,
      teams,
      galleries,
      announcements,
      achievements,
      faqs,
      alumni,
    };

    res.json(societyInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve society information' });
  }
};