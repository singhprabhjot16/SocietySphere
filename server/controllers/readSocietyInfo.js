import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const getSocietyDetails = async (societyId) => {
  try {
    const society = await prisma.society.findUnique({
      where: { id: parseInt(societyId, 10) },
      // include: {
      //   student: true, // Include student details
      // },
    });
    return society;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to retrieve society details');
  }
};

// export const getTeamsBySociety = async (societyId) => {
//   try {
//     const teams = await prisma.team.findMany({
//       where: { societyId: parseInt(societyId, 10) },
//     });
//     return teams;
//   } catch (error) {
//     console.log(error);
//     throw new Error('Failed to retrieve teams');
//   }
// };

export const getTeamsBySociety = async (societyId) => {
  try {
    const teams = await prisma.team.findMany({
      where: { societyId: parseInt(societyId, 10) },
      include: {
        student: true, // This includes the student details related to each team
      },
    });
    return teams;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to retrieve teams');
  }
};

export const getGalleriesBySociety = async (societyId) => {
  try {
    const galleries = await prisma.gallery.findMany({
      where: { societyId: parseInt(societyId, 10) },
    });
    return galleries;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to retrieve galleries');
  }
};

export const getAnnouncementsBySociety = async (societyId) => {
  try {
    const announcements = await prisma.announcement.findMany({
      where: { societyId: parseInt(societyId, 10) },
    });
    return announcements;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to retrieve announcements');
  }
};

export const getAchievementsBySociety = async (societyId) => {
  try {
    const achievements = await prisma.achievement.findMany({
      where: { societyId: parseInt(societyId, 10) },
    });
    return achievements;
  } catch (error) {
    throw new Error('Failed to retrieve achievements');
  }
};

export const getFaqsBySociety = async (societyId) => {
  try {
    const faqs = await prisma.fAQ.findMany({
      where: { societyId: parseInt(societyId, 10) },
    });
    return faqs;
  } catch (error) {
    throw new Error('Failed to retrieve FAQs');
  }
};

export const getAlumniBySociety = async (societyId) => {
  try {
    const alumni = await prisma.alumni.findMany({
      where: { societyId: parseInt(societyId, 10) },
      include: {
        student: true, // Include student details
      },
    });
    return alumni;
  } catch (error) {
    throw new Error('Failed to retrieve alumni');
  }
};
