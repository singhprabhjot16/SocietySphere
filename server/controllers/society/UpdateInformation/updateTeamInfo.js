import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateTeam = async (req, res) => {
  const { societyId } = req.params;
  const { teams } = req.body;

  try {
    for (const team of teams) {
      const { id, name, rollNo, memberRole, imageUrl, caption } = team;

      let student = await prisma.student.findUnique({ where: { rollNo } });

      if (!student) {
        return res.status(400).json({ error: 'Student not found for team entry' });
      }

      await prisma.team.update({
        where: { id },
        data: {        
          memberRole,     
          imageUrl,      
          caption,     
          studentId: student.id,
          societyId: parseInt(societyId, 10),
        },
      });
    }
    res.status(200).json({ message: 'Teams updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update teams', details: error.message });
  }
};