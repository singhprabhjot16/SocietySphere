import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const addSocietyInfo = async (req, res) => {
  const { societyId } = req.params;
  const { teams, galleries, announcements, achievements, faqs, alumni } = req.body;

  try {
    if (teams) {
      for (const team of teams) {
        // Check if the student exists
        let student = await prisma.student.findUnique({
          where: { rollNo: team.rollNo },
        });

        // If the student doesn't exist, add them to the Student table
        if (!student) {
          student = await prisma.student.create({
            data: {
              name: team.name,
              rollNo: team.rollNo,
            },
          });
        }

        // Add the team record
        await prisma.team.create({
          data: {
            ...team,
            studentId: student.id, // Use the student ID for the relation
            societyId: parseInt(societyId, 10),
          },
        });
      }
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
      for (const alum of alumni) {
        // Check if the student exists in the Student table
        let student = await prisma.student.findUnique({
          where: { rollNo: alum.rollNo },
        });

        // If the student doesn't exist, add them to the Student table
        if (!student) {
          student = await prisma.student.create({
            data: {
              name: alum.name,
              rollNo: alum.rollNo,
            },
          });
        }

        // Add the alumni record
        await prisma.alumni.create({
          data: {
            ...alum,
            studentId: student.id, // Use the student ID for the relation
            societyId: parseInt(societyId, 10),
          },
        });
      }
    }

    res.status(201).json({ message: 'Society info added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add society info' });
  }
};

export default addSocietyInfo;
