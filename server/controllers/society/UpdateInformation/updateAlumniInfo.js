import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateAlumni = async (req, res) => {
  const { societyId } = req.params;
  const { alumni } = req.body;

  try {
    for (const alum of alumni) {
      const { id, role, rollNo, imageUrl, caption } = alum;

      let student = await prisma.student.findUnique({ where: { rollNo } });

      if (!student) {
        return res.status(400).json({ error: 'Student not found for alumni entry' });
      }

      await prisma.alumni.update({
        where: { id },
        data: {
          role,
          imageUrl,
          caption,
          studentId: student.id,
          societyId: parseInt(societyId, 10),
        },
      });
    }
    res.status(200).json({ message: 'Alumni updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update alumni', details: error.message });
  }
};