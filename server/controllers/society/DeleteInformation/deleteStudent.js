import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteStudent = async (req, res) => {
    const { id } = req.body;
  
    try {
      await prisma.student.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: 'Student record deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete student record' });
    }
  };