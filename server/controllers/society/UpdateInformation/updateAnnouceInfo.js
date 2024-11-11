import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateAnnouncement = async (req, res) => {
  const { societyId } = req.params;
  const announcement = req.body;
  const { id, title, content } = announcement;
  console.log('announcement:', announcement);

  try {
    // for (const announcement of announcements) {

    const response = await prisma.announcement.update({
        where: { id: parseInt(id, 10) },
        data: {
          title,
          content,
          societyId: parseInt(societyId, 10),
        },
      });
    // }
    res.status(200).json({...response, message: 'Announcements updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update announcements', details: error.message });
  }
};