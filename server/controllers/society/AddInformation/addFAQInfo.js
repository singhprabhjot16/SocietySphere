import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addFAQ = async (req, res) => {
  const { societyId } = req.params;
  const { faqs } = req.body;

  try {
    await prisma.fAQ.createMany({
      data: faqs.map(faq => ({
        ...faq,
        societyId: parseInt(societyId, 10),
      })),
    });
    res.status(201).json({ message: 'FAQs added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add FAQs', details: error.message });
  }
};
