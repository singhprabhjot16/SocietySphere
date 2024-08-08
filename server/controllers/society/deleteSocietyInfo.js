import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const deleteSocietyInfo = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.team.deleteMany({ where: { societyId: parseInt(id, 10) } });
    await prisma.gallery.deleteMany({ where: { societyId: parseInt(id, 10) } });
    await prisma.announcement.deleteMany({ where: { societyId: parseInt(id, 10) } });
    await prisma.achievement.deleteMany({ where: { societyId: parseInt(id, 10) } });
    await prisma.faq.deleteMany({ where: { societyId: parseInt(id, 10) } });
    await prisma.alumni.deleteMany({ where: { societyId: parseInt(id, 10) } });

    await prisma.society.delete({ where: { id: parseInt(id, 10) } });

    res.status(200).json({ message: 'Society info deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete society info' });
  }
};

export default deleteSocietyInfo;
