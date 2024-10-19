import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateAnnouncement = async (req, res) => {
  const { societyId } = req.params;
  const { announcements } = req.body;

  try {
    for (const announcement of announcements) {
      const { id, title, content } = announcement;

      await prisma.announcement.update({
        where: { id },
        data: {
          title,
          content,
          societyId: parseInt(societyId, 10),
        },
      });
    }
    res.status(200).json({ message: 'Announcements updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update announcements', details: error.message });
  }
};