import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addGallery = async (req, res) => {
  const { societyId } = req.params;
  const { galleries } = req.body;

  try {
    await prisma.gallery.createMany({
      data: galleries.map(gallery => ({
        ...gallery,
        societyId: parseInt(societyId, 10),
      })),
    });
    res.status(201).json({ message: 'Galleries added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add galleries', details: error.message });
  }
};
