import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteTeam = async (req, res) => {
  const { societyId } = req.params;
  const { id } = req.body;

  try {
    await prisma.team.deleteMany({
      where: {
        id: id,
        societyId: parseInt(societyId, 10),
      },
    });
    res.status(200).json({ message: 'Team record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete team record' });
  }
};