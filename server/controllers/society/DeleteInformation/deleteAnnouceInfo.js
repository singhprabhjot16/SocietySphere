import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteAnnouncement = async (req, res) => {
    const { societyId } = req.params;
    const { id } = req.body;
  
    try {
      await prisma.announcement.deleteMany({
        where: {
          id: parseInt(id, 10),
          societyId: parseInt(societyId, 10),
        },
      });
      res.status(200).json({ message: 'Announcement record deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete announcement record' });
    }
  };