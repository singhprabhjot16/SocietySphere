import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteGallery = async (req, res) => {
    const { societyId } = req.params;
    const { id } = req.body;
  
    try {
      await prisma.gallery.deleteMany({
        where: {
          id: id,
          societyId: parseInt(societyId, 10),
        },
      });
      res.status(200).json({ message: 'Gallery record deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete gallery record' });
    }
  };