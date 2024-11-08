import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addAnnouncement = async (req, res) => {
  const { societyId } = req.params;
  const { title, content } = req.body;

  try {
    await prisma.announcement.create({
      data: {
        title, content,
        societyId: parseInt(societyId, 10),
    },
    });
    res.status(201).json({ message: 'Announcements added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add announcements', details: error.message });
  }
};
