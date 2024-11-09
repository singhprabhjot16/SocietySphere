import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const updateFAQ = async (req, res) => {
  const { societyId } = req.params;
  const { id, question, answer } = req.body;
  console.log('req: ', req);

  try {
    // for (const faq of faqs) {
      // const { id, question, answer } = faq;

      const response = await prisma.fAQ.update({
        where: { id: parseInt(id, 10) },
        data: {
          question,
          answer,
          societyId: parseInt(societyId, 10),
        },
      });
    // }
    res.status(200).json({ ...response, message: 'FAQs updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update FAQs', details: error.message });
  }
};