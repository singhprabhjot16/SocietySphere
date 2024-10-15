import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteAchievement = async (req, res) => {
    const { societyId } = req.params;
    const { id } = req.body;
  
    try {
      await prisma.achievement.deleteMany({
        where: {
          id: id,
          societyId: parseInt(societyId, 10),
        },
      });
      res.status(200).json({ message: 'Achievement record deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete achievement record' });
    }
};