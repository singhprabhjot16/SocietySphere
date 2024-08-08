import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const updateSocietyInfo = async (req, res) => {
  const { id } = req.params;
  const { teams, galleries, announcements, achievements, faqs, alumni } = req.body;

  try {
    if (teams) {
      await Promise.all(teams.map(async (team) => {
        await prisma.team.update({
          where: { id: team.id },
          data: { ...team, societyId: parseInt(id, 10) },
        });
      }));
    }

    if (galleries) {
      await Promise.all(galleries.map(async (gallery) => {
        await prisma.gallery.update({
          where: { id: gallery.id },
          data: { ...gallery, societyId: parseInt(id, 10) },
        });
      }));
    }

    if (announcements) {
      await Promise.all(announcements.map(async (announcement) => {
        await prisma.announcement.update({
          where: { id: announcement.id },
          data: { ...announcement, societyId: parseInt(id, 10) },
        });
      }));
    }

    if (achievements) {
      await Promise.all(achievements.map(async (achievement) => {
        await prisma.achievement.update({
          where: { id: achievement.id },
          data: { ...achievement, societyId: parseInt(id, 10) },
        });
      }));
    }

    if (faqs) {
      await Promise.all(faqs.map(async (faq) => {
        await prisma.faq.update({
          where: { id: faq.id },
          data: { ...faq, societyId: parseInt(id, 10) },
        });
      }));
    }

    if (alumni) {
      await Promise.all(alumni.map(async (alum) => {
        await prisma.alumni.update({
          where: { id: alum.id },
          data: { ...alum, societyId: parseInt(id, 10) },
        });
      }));
    }

    res.status(200).json({ message: 'Society info updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update society info' });
  }
};

export default updateSocietyInfo;
