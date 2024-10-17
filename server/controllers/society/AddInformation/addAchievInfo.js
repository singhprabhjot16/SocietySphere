import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addAchievement = async (req, res) => {
  const { societyId } = req.params;
  const { achievements } = req.body;

  try {
    await prisma.achievement.createMany({
      data: achievements.map(achievement => ({
        ...achievement,
        societyId: parseInt(societyId, 10),
      })),
    });
    res.status(201).json({ message: 'Achievements added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add achievements', details: error.message });
  }
};
