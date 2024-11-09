import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addFAQ = async (req, res) => {
  const { societyId } = req.params;
  const { question, answer } = req.body;
  console.log(question);

  try {
    await prisma.fAQ.create({
      data: {
        question, answer,
        societyId: parseInt(societyId, 10),
      },
    });
    res.status(201).json({ message: 'FAQ added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add FAQs', details: error.message });
  }
};
