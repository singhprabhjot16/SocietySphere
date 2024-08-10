import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const addSocietyInfo = async (req, res) => {
  const { societyId } = req.params;
  const { teams, galleries, announcements, achievements, faqs, alumni } = req.body;
  try {
    if (teams) {
      try {
        for (const team of teams) {
          // Extract student details
          const { name, rollNo, ...teamDetails } = team;
          
          // Check if the student exists
          let student = await prisma.student.findUnique({
            where: { rollNo: rollNo },
          });
          
          // If the student doesn't exist, add them to the Student table
          if (!student) {
            student = await prisma.student.create({
              data: {
                name: name,
                rollNo: rollNo,
              },
            });
          }
      
          // Add the team record with studentId and societyId
          await prisma.team.create({
            data: {
              ...teamDetails, // Spread remaining team details
              studentId: student.id, // Use the student ID for the relation
              societyId: parseInt(societyId, 10), // Ensure societyId is an integer
            },
          });
        } 
        console.log("work done")
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: ' Teams info Failed to add society info' });
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
      await prisma.fAQ.createMany({
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
