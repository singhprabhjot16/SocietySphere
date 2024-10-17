import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addAnnouncement = async (req, res) => {
  const { societyId } = req.params;
  const { announcements } = req.body;

  try {
    await prisma.announcement.createMany({
      data: announcements.map(announcement => ({
        ...announcement,
        societyId: parseInt(societyId, 10),
      })),
    });
    res.status(201).json({ message: 'Announcements added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add announcements', details: error.message });
  }
};
