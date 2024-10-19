import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateStudent = async (req, res) => {
  const { societyId } = req.params; 
  const { students } = req.body; 

  try {
    for (const student of students) {
      const { id, name, rollNo } = student;

      await prisma.student.update({
        where: { id }, 
        data: {
          name,
          rollNo,
        },
      });
    }
    res.status(200).json({ message: 'Students updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update students', details: error.message });
  }
};