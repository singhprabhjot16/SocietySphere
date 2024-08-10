import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const deleteSocietyInfo = async (req, res) => {
  const { societyId } = req.params;

  try {
    await prisma.team.deleteMany({ where: { societyId: parseInt(societyId, 10) } });
    await prisma.gallery.deleteMany({ where: { societyId: parseInt(societyId, 10) } });
    await prisma.announcement.deleteMany({ where: { societyId: parseInt(societyId, 10) } });
    await prisma.achievement.deleteMany({ where: { societyId: parseInt(societyId, 10) } });
    await prisma.fAQ.deleteMany({ where: { societyId: parseInt(societyId, 10) } });
    await prisma.alumni.deleteMany({ where: { societyId: parseInt(societyId, 10) } });

    await prisma.society.delete({ where: { id: parseInt(societyId, 10) } });

    res.status(200).json({ message: 'Society info deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete society info' });
  }
};

export default deleteSocietyInfo;
