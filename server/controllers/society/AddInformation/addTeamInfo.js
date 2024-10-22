import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addTeam = async (req, res) => {
  const { societyId } = req.params;
  const team  = req.body;

  try {
    console.log(team)
    // for (const team of teams) {
      const { name, rollNo, ...teamDetails } = team;

      let student = await prisma.student.findUnique({ where: { rollNo } });

      if (!student) {
        student = await prisma.student.create({ data: { name, rollNo } });
      }

      await prisma.team.create({
        data: {
          ...teamDetails,
          studentId: student.id,
          societyId: parseInt(societyId, 10),
        },
      });
      console.log("team: ")
    // }
    res.status(201).json({ message: 'Teams added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add teams', details: error.message });
  }
};
