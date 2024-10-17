import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addAlumni = async (req, res) => {
  const { societyId } = req.params;
  const { alumni } = req.body;

  try {
    for (const alum of alumni) {
      const { name, rollNo, ...alumDetails } = alum;

      let student = await prisma.student.findUnique({ where: { rollNo } });

      if (!student) {
        student = await prisma.student.create({ data: { name, rollNo } });
      }

      await prisma.alumni.create({
        data: {
          ...alumDetails,
          studentId: student.id,
          societyId: parseInt(societyId, 10),
        },
      });
    }
    res.status(201).json({ message: 'Alumni added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add alumni', details: error.message });
  }
};
