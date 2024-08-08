import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const addSocietyInfo = async (req, res) => {
  const { societyId } = req.params;
  const { teams, galleries, announcements, achievements, faqs, alumni } = req.body;

  try {
    if (teams) {
      await prisma.team.createMany({
        data: teams.map((team) => ({ ...team, societyId: parseInt(societyId, 10) })),
      });
    }
    
    if (galleries) {
      await prisma.gallery.createMany({
        data: galleries.map((gallery) => ({ ...gallery, societyId: parseInt(societyId, 10) })),
      });
    }

    if (announcements) {
      await prisma.announcement.createMany({
        data: announcements.map((announcement) => ({ ...announcement, societyId: parseInt(societyId, 10) })),
      });
    }

    if (achievements) {
      await prisma.achievement.createMany({
        data: achievements.map((achievement) => ({ ...achievement, societyId: parseInt(societyId, 10) })),
      });
    }

    if (faqs) {
      await prisma.faq.createMany({
        data: faqs.map((faq) => ({ ...faq, societyId: parseInt(societyId, 10) })),
      });
    }

    if (alumni) {
      await prisma.alumni.createMany({
        data: alumni.map((alum) => ({ ...alum, societyId: parseInt(societyId, 10) })),
      });
    }

    res.status(201).json({ message: 'Society info added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add society info' });
  }
};

export default addSocietyInfo;
