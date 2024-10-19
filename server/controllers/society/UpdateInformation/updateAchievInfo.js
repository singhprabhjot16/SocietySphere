import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateAchievement = async (req, res) => {
  const { societyId } = req.params;
  const { achievements } = req.body;

  try {
    for (const achievement of achievements) {
      const { id, title, description, imageUrl, caption } = achievement;

      await prisma.achievement.update({
        where: { id },
        data: {
          title,
          description,
          imageUrl,
          caption,
          societyId: parseInt(societyId, 10),
        },
      });
    }
    res.status(200).json({ message: 'Achievements updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update achievements', details: error.message });
  }
};