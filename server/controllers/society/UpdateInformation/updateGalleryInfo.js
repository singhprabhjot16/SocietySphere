import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateGallery = async (req, res) => {
  const { societyId } = req.params;
  const { galleries } = req.body;

  try {
    for (const gallery of galleries) {
      const { id, imageUrl, caption } = gallery;

      await prisma.gallery.update({
        where: { id },
        data: {
          imageUrl,
          caption,
          societyId: parseInt(societyId, 10),
        },
      });
    }
    res.status(200).json({ message: 'Galleries updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update galleries', details: error.message });
  }
};